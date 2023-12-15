// Task 2
class OneNews {
    _tags = [];
    constructor(title, text, date, ...tags) {
        this._title = title;
        this._text = text;
        this._date = new Date(date);
        this._tags = tags.slice(0);
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
    }
    get date() {
        return this._date;
    }
    set date(value) {
        this._date = value;
    }
    getTags() {
        return this._tags.slice(0);
    }
    addTag(newTag) {
        this._tags.push(newTag);
    }
    toString() {
        return `${this._title}\n${this._text}\nDate: ${this._date}\nTags: ${this._tags.map(item => item = `#${item}`).join(", ")}`;
    }
    #returnDate() {
        const now = new Date();
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(now.getDate() - 7);

        if (this._date.getFullYear() == now.getFullYear() && this._date.getMonth() == now.getMonth() && this._date.getDate() === now.getDate()) {
                return "today";
        } else if (oneWeekAgo <= this._date) {
            return `${now.getDate() - this._date.getDate()} days ago`;
        }
        return `${this._date.getDate()}.${this._date.getMonth()}.${this._date.getFullYear()}`;
    }
    print() {
        let str = `<div style="padding: 10px; margin: 5px; border-radius: 1px; border-style: solid; border-color: black;"><h1 style="font-size: 18px; margin: 0px">${this._title}</h1><p style="font-size: 10px;">${this.#returnDate()}</p><p>${this._text}</p><p>${this._tags.map(item => item = `#${item}`).join(", ")}</p></div>`
        document.write(str);
    }
}
class NewsFeed {
    #news = [];
    get count() {
        return this.#news.length;
    }
    displayAll() {
        this.#news.forEach(item => console.log(item.toString()));
    }
    addOneNews(oneNews) {
        this.#news.push(oneNews);
    }
    deleteOneNews(title) {
        this.#news.splice(this.#news.findIndex(item => item.title == title), 1);
    }
    sortNewsByDate() {
        this.#news.sort(this.#compareNews);
    }
    #compareNews(a, b) {
        if (a.date < b.date) return 1;
        if (a.date == b.date) return 0;
        if (a.date > b.date) return -1;
    }
    findNewsByTag(tag) {
        return this.#news.filter(oneNews => oneNews.getTags().indexOf(oneTag => oneTag == tag));
    }
}
let feed = new NewsFeed();
console.log(`Befor adding ${feed.count} news`);
feed.addOneNews(new OneNews("Title 1", "sdfsd sdfsdfg segewrge wer", new Date(2023, 11, 2), "news", "TV"));
feed.addOneNews(new OneNews("Title 3", "ertg sdfsdretr fg  ergt wer", new Date(2023, 11, 13), "news", "Kyiv"));
feed.addOneNews(new OneNews("Title 4", "eurty xdfjw rgxd wer", new Date(2023, 11, 15), "star", "celebrity"));
feed.addOneNews(new OneNews("Title 2", "erreht sdfert resdfg segew revrge wer", new Date(2023, 11, 4), "TV", "Ukraine"));
feed.displayAll();
console.log(`After adding ${feed.count} news`);

feed.deleteOneNews("Title 2");
feed.displayAll();
console.log(`After deleting 1 news with \"Title 1\" ${feed.count} news`);

feed.sortNewsByDate();
console.log(`After sorting`);
feed.displayAll();

let byTag = feed.findNewsByTag("TV");
console.log(`Searching by tag \'TV\': ${byTag.forEach(item => item.print())}`);

