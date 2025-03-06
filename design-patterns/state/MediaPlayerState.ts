enum MediaPlayerStatus {
    PARADO = "PARADO",
    TOCANDO = "TOCANDO",
    PAUSADO = "PAUSADO",
}

interface MediaPlayerState {
    play(): void;
    pause(): void;
    stop(): void;
}

class MediaPlayerCustom {
    private state: MediaPlayerState;
    public status: MediaPlayerStatus;

    constructor() {
        this.status = MediaPlayerStatus.PARADO;
        this.state = new PlayerParado(this);
        console.log(`Media Player iniciado no estado: ${this.status}`);
    }

    setState(state: MediaPlayerState, status: MediaPlayerStatus) {
        this.state = state;
        this.status = status;
        console.log(`Estado alterado para: ${this.status}`);
    }

    play() {
        this.state.play();
    }

    pause() {
        this.state.pause();
    }

    stop() {
        this.state.stop();
    }
}

class PlayerParado implements MediaPlayerState {
    constructor(private player: MediaPlayerCustom) { }

    play() {
        console.log("🎶 Tocando música...");
        this.player.setState(new PlayerTocando(this.player), MediaPlayerStatus.TOCANDO);
    }

    pause() {
        console.log("Não pode pausar se está parado.");
    }

    stop() {
        console.log("Já está parado.");
    }
}

class PlayerTocando implements MediaPlayerState {
    constructor(private player: MediaPlayerCustom) { }

    play() {
        console.log("Já está tocando.");
    }

    pause() {
        console.log("⏸ Música pausada.");
        this.player.setState(new PlayerPausado(this.player), MediaPlayerStatus.PAUSADO);
    }

    stop() {
        console.log("⏹ Música parada.");
        this.player.setState(new PlayerParado(this.player), MediaPlayerStatus.PARADO);
    }
}

class PlayerPausado implements MediaPlayerState {
    constructor(private player: MediaPlayerCustom) { }

    play() {
        console.log("▶️ Voltando a tocar...");
        this.player.setState(new PlayerTocando(this.player), MediaPlayerStatus.TOCANDO);
    }

    pause() {
        console.log("Já está pausado.");
    }

    stop() {
        console.log("⏹ Música parada.");
        this.player.setState(new PlayerParado(this.player), MediaPlayerStatus.PARADO);
    }
}

// Teste
console.log("\n=== Media Player ===");
const customPlayer = new MediaPlayerCustom();

customPlayer.play();  // Tocando
customPlayer.pause(); // Pausado
customPlayer.play();  // Tocando novamente
customPlayer.stop();  // Parado
customPlayer.pause(); // Não pode pausar
