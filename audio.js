/* 實際 WAV 音樂與配音；HTMLAudio 互動解鎖、動態切曲、配音降音。 */
(function(g){
class Sound {
constructor(status){this.status=status;this.music=new Audio();this.music.loop=true;this.music.preload='auto';this.music.volume=.42;this.voice=new Audio();this.voice.preload='auto';this.musicOn=true;this.voiceOn=true;this.unlocked=false;this.track='school';this.volume=.42;this.voiceVolume=.95;this.playing=false;this.lastLine=null;this.voice.onended=()=>this.duck(false);this.voice.onerror=()=>{this.duck(false);this.sayStatus('配音檔讀取失敗，請重播或重新整理；字幕仍可閱讀。');};this.music.onerror=()=>this.sayStatus('音樂資源未載入，請檢查 assets/music 路徑。');document.addEventListener('visibilitychange',()=>{if(document.hidden){this.music.pause();this.stopVoice();}else if(this.unlocked&&this.musicOn)this.playMusic();});}
sayStatus(s){this.status.textContent=s;}
async unlock(){this.unlocked=true;await this.playMusic();}
async playMusic(){if(!this.unlocked||!this.musicOn)return;if(!this.music.src)this.music.src='assets/music/'+this.track+'.wav';try{await this.music.play();this.playing=true;this.sayStatus('♫ '+({school:'校園微光',mountain:'霧林尋跡',sea:'潮汐警報',station:'歸航燈火',danger:'危機迫近',good:'山海的約定',sad:'返回方向'}[this.track])+' · 原創音樂播放中');}catch(e){this.playing=false;this.sayStatus('瀏覽器尚未允許聲音，請按「音樂開」再次解鎖。');}}
setTrack(name){if(this.track===name&&this.music.src)return;this.track=name;this.music.pause();this.music.src='assets/music/'+name+'.wav';this.music.load();this.playMusic();}
duck(active){this.music.volume=this.musicOn?this.volume*(active?.25:1):0;}
toggleMusic(){this.musicOn=!this.musicOn;if(this.musicOn){this.unlocked=true;this.duck(!this.voice.paused);this.playMusic();}else{this.music.pause();this.sayStatus('音樂已靜音 · 配音可獨立開關');}return this.musicOn;}
toggleVoice(){this.voiceOn=!this.voiceOn;if(!this.voiceOn)this.stopVoice();return this.voiceOn;}
stopVoice(){this.voice.pause();this.voice.currentTime=0;this.duck(false);}
async speak(id){this.lastLine=id;this.stopVoice();if(!this.voiceOn||!this.unlocked)return;this.voice.src='assets/voices/'+id+'.wav';this.voice.volume=this.voiceVolume;this.duck(true);try{await this.voice.play();}catch(e){this.duck(false);this.sayStatus('配音未獲播放許可，請點「重播這句配音」。');}}
replay(){if(this.lastLine){this.unlocked=true;this.speak(this.lastLine);}}
}
g.Sound=Sound;
})(window);