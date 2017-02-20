export class Article {
    votes: number;
    title: string;
    link: string;
    //? means its optional
    constructor(title: string, link:string, votes?:number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;

    }

    voteUp() {
    this.votes += 1;
  }

  voteDown() {
    this.votes -= 1;
  }

  domain(): string{
    try{
      const link: string = this.link.split('//')[1];
      return link.split('/')[0];
    }catch(err){
      return null;
    }
  }
}