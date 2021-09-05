import { AlbumRaw } from './albumRaw.js'

export class AlbumTable {
    constructor() {
        this.view = 'list';
        this.albums = [];
    }

    setView(view) {
        this.view = view
        this.renderView()
    }

    setAlbums(data) {
        this.albums = data
        this.renderView()
    }

    renderView() {
        const album = this.albumsContainer.querySelector('.albums__list');
        const mainCheckbox = this.albumsHeader.querySelector('.main-checkbox');
        mainCheckbox.checked = false;

        album.innerHTML = "";
        album.classList.remove(...['list', 'grid']);

        if (this.view === 'list') {
            this.renderAlbumsList()
        } else {
            this.renderAlbumsGrid()
        }
    }

    renderAlbum() {
        const albumsList = this.albumsContainer.querySelector('.albums__list');
        this.albumsList = albumsList;
        const mainCheckbox = this.albumsHeader.querySelector('.main-checkbox');
        mainCheckbox.checked = false;

        for (const album of this.albums) {
            const albumRaw = new AlbumRaw(album.id, album.title, album.userId, this.albumsContainer)
            albumsList.insertAdjacentHTML('beforeend', albumRaw.render())
        }
        return albumsList;
    }

    deleteAlbum() {
        const checkedAlbums = this.albumsList.querySelectorAll('.album-checkbox:checked');
        const mainCheckbox = this.albumsHeader.querySelector('.main-checkbox');

        mainCheckbox.checked = false;

        checkedAlbums.forEach(checkbox => {
            checkbox.closest('.album').remove();
        });
    }

    deleteAlbumsListContent() {
        this.albumsList.innerHTML = '';
    }
    renderAlbumsList() {
        this.renderAlbum().classList.add('list');
    }

    renderAlbumsGrid() {
        this.renderAlbum().classList.add('grid');
    }

    render() {
        this.albumsContainer = this.createElement('div', ['albums']);

        const albumsHeader = this.createElement('div', ['albums__header'],
            `<div class="input-group-prepend">
                <div class="input-group-text">
                    <input class="main-checkbox" type="checkbox" aria-label="Radio button for following text input">
                 </div>
            </div>
            <p>id</p>
            <p>Title</p>
            <p>Owner</p>`);

        const buttonsBox = this.createElement('div', ['list-style-buttons'],
            `<button class="btn btn-list"></button>
            <button class="btn btn-grid"></button>`);

        buttonsBox.addEventListener('click', (event) => {
            if (this.albumsList.innerHTML === '') return;

            if (event.target.closest('.btn-list')) {
                this.setView('list')
            } else if (event.target.closest('.btn-grid')) {
                this.setView('grid')
            }
        })

        const albumsList = this.createElement('div', ['albums__list']);

        this.albumsHeader = albumsHeader;
        albumsHeader.append(buttonsBox);
        this.albumsContainer.append(albumsHeader, albumsList);
        return this.albumsContainer;
    }

    setAllCheckboxes(isChecked) {
        const allCheckboxes = document.querySelectorAll('.album-checkbox');

        allCheckboxes.forEach(checkbox => {
            checkbox.checked = isChecked;


        });
    }

    createElement(tag, classes, text = '') {
        const element = document.createElement(tag);
        element.classList.add(...[classes]);
        element.innerHTML = text;
        return element;
    }
}

