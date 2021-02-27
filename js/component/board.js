class Board {
    constructor(boardTitle) {
        this.rootElement = document.querySelector('#root-frame');
        this.boardTitle = boardTitle;
        this.boardView = null;
        
        this.buildComponent();
    }
    
    buildComponent() {
        let board = document.createElement('div');
        board.classList.add('board');
        
        let boardTitle = document.createElement('div');
        boardTitle.classList.add('board-title');
        boardTitle.innerText = this.boardTitle;
        
        boardTitle.addEventListener('click', this.showTitle.bind(this))
        
        let boardContent = document.createElement('div');
        boardContent.classList.add('board-content');
        
        board.appendChild(boardTitle);
        board.appendChild(boardContent);
        
        this.boardView = board;
        
        this.rootElement.appendChild(this.boardView);
    }
    
    showTitle() {
        console.log(this);
        alert(this.boardTitle);
    }
}