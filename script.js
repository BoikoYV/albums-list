import convertToArray from './utils/convertToArray.js'
import { AlbumTable } from './albumTable.js'

const searchInput = document.querySelector('#search-input')
const searchBtn = document.querySelector('#search-btn');
const deleteBtn = document.querySelector('.delete-btn');

const root = document.querySelector('#root')

const albumTable = new AlbumTable();

root.insertAdjacentElement('beforeend', albumTable.render())


async function getAlbums(ids) {
    const result = []
    const albums = ids.map(
        id => fetch(`https://ajax.test-danit.com/api/json/albums/${id}`)
            .then(response => response.json())
    )
    for await (const album of albums) {
        result.push(album)
    }
    return result
}

searchBtn.addEventListener('click', async (event) => {
    event.preventDefault()
    const { value } = searchInput
    const ids = convertToArray(value)
    const albums = await getAlbums(ids)
    albumTable.setAlbums(albums)
    console.log(albumTable);
})



const mainCheckbox = document.querySelector('.main-checkbox');

mainCheckbox.addEventListener('change', (e) => {
    albumTable.setAllCheckboxes(e.target.checked);
})


deleteBtn.addEventListener('click', () => {
    const albumsList = document.querySelector('.albums__list');

    if (albumsList.innerHTML !== '') {
        albumTable.deleteAlbum();
    }

    if (mainCheckbox.checked) {
        albumTable.deleteAlbumsListContent();
    }
})