// Subsistemas complexos
class AudioSystem {
    private volume: number = 50;

    setVolume(percent: number): void {
        this.volume = percent;
        console.log(`>> Volume ajustado para ${percent}%`);
    }

    processAudio(audioData: string): void {
        console.log(`>> Processando áudio: ${audioData}`);
    }
}

class VideoSystem {
    private brightness: number = 50;

    setBrightness(percent: number): void {
        this.brightness = percent;
        console.log(`>> Brilho ajustado para ${percent}%`);
    }

    processVideo(videoData: string): void {
        console.log(`>> Processando vídeo: ${videoData}`);
    }
}

class FileSystemHandler {
    loadFile(path: string): string {
        console.log(`>> Carregando arquivo: ${path}`);
        return `>> Conteúdo de ${path}`;
    }
}

// Facade
class MediaPlayerFacade {
    private audioSystem: AudioSystem;
    private videoSystem: VideoSystem;
    private fileSystem: FileSystemHandler;
    private isPlaying: boolean = false;

    constructor() {
        this.audioSystem = new AudioSystem();
        this.videoSystem = new VideoSystem();
        this.fileSystem = new FileSystemHandler();
    }

    play(filePath: string): void {
        console.log('\n> > ▶️ Iniciando reprodução...');
        const mediaContent = this.fileSystem.loadFile(filePath);
        this.videoSystem.processVideo(mediaContent);
        this.audioSystem.processAudio(mediaContent);
        this.isPlaying = true;
        console.log('> > Mídia em reprodução ▶️');
    }

    pause(): void {
        if (this.isPlaying) {
            this.isPlaying = false;
            console.log('\n> > ⏸️ Mídia pausada');
        }
    }

    resume(): void {
        if (!this.isPlaying) {
            this.isPlaying = true;
            console.log('\n> > ▶️ Reprodução continuada');
        }
    }

    stop(): void {
        if (this.isPlaying) {
            this.isPlaying = false;
            console.log('\n> > ⏹️ Reprodução interrompida');
        }
    }

    setVolume(percent: number): void {
        this.audioSystem.setVolume(percent);
    }

    setBrightness(percent: number): void {
        this.videoSystem.setBrightness(percent);
    }
}

const player = new MediaPlayerFacade();

// Interface simples para o cliente
player.play('video.mp4');
player.setVolume(75);
player.setBrightness(60);
player.pause();
player.resume();
player.stop();
