export class AlbumRaw {
    constructor(id, title, userId) {
        this.id = id;
        this.title = title;
        this.userId = userId;
    }

    render() {
        const html = `
        <div class="album">
            <div class=" input-group-prepend">
                <div class="input-group-text">
                    <input class="album-checkbox" type="checkbox" aria-label="Radio button for following text input">
                </div>
            </div>
            <p class="album__id" data-id="${this.id}">${this.id}</p>
            <p>${this.title}</p>
            <p>${this.userId} Ervin Howell
                <a class="user-email" href="mailto:useremail@gmail.com">@mdo</a>
            </p>
        </div>
        `;

        return html
    }
}