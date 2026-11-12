const fs=require('fs'),path=require('path'),cp=require('child_process');
const r=cp.spawnSync('powershell.exe',['-NoProfile','-ExecutionPolicy','Bypass','-File',path.join(__dirname,'generate-voices.ps1')],{encoding:'utf8',maxBuffer:100*1024*1024});
if(r.status||r.stderr.trim())throw Error(r.stderr||'Voice synthesis failed');
const expected=JSON.parse(fs.readFileSync(path.join(__dirname,'voice-lines.json'),'utf8'));
const rows=r.stdout.trim().split(/\r?\n/).map(s=>JSON.parse(s));
if(rows.length!==expected.length)throw Error('Voice count mismatch');
const dir=path.join(__dirname,'assets/voices');fs.mkdirSync(dir,{recursive:true});
for(const row of rows){const pcm=Buffer.from(row.data,'base64');if(pcm.length<1000)throw Error('Invalid voice '+row.id);const b=Buffer.alloc(44+pcm.length);b.write('RIFF');b.writeUInt32LE(b.length-8,4);b.write('WAVEfmt ',8);b.writeUInt32LE(16,16);b.writeUInt16LE(1,20);b.writeUInt16LE(1,22);b.writeUInt32LE(22050,24);b.writeUInt32LE(44100,28);b.writeUInt16LE(2,32);b.writeUInt16LE(16,34);b.write('data',36);b.writeUInt32LE(pcm.length,40);pcm.copy(b,44);fs.writeFileSync(path.join(dir,row.id+'.wav'),b);console.log(row.id,b.length);}
