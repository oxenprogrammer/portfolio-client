import { Component, OnInit } from '@angular/core';

import { IProject } from '../interfaces';
import { PortfolioService } from '../portfolio/portfolio.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  projects: any;
  constructor(private portfolioService: PortfolioService) {
    // this.projects = [
    //   {
    //     title: 'Slack Bot',
    //     desc: 'Nerd Bot is a bot that serves a developer on Slack with random programming humors whenever they need to take a little break from code',
    //     image: 'http://cio.ucop.edu/wp-content/uploads/2016/09/Slack-Bot.jpg',
    //     language: [
    //       'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/ruby/ruby.png',
    //       'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png',
    //       'https://user-images.githubusercontent.com/819186/51553744-4130b580-1e7c-11e9-889e-486937b69475.png',
    //     ],
    //   },
    //   {
    //     title: 'Sudo Wear',
    //     desc: 'Sudo Wear in a server e-commerce API for my developer T-Shirts business.',
    //     image: 'https://www.surrealcms.com/uploads/nodejs-logo.png',
    //     language: [
    //       'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fnodejs-png-nodejs-icon-png-50-px-1600.png&f=1&nofb=1',
    //       'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F1600%2Fmongodb.png&f=1&nofb=1',
    //       'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fredis-2%2F1451%2FUntitled-2-512.png&f=1&nofb=1',
    //     ],
    //   },
    //   {
    //     title: 'Slack Bot',
    //     desc: 'Nerd Bot is a bot that serves a developer on Slack with random programming humors whenever they need to take a little break from code',
    //     image: 'http://cio.ucop.edu/wp-content/uploads/2016/09/Slack-Bot.jpg',
    //     language: [
    //       'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/ruby/ruby.png',
    //       'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png',
    //       'https://user-images.githubusercontent.com/819186/51553744-4130b580-1e7c-11e9-889e-486937b69475.png',
    //     ],
    //   },
    //   {
    //     title: 'Sudo Wear',
    //     desc: 'Sudo Wear in a server e-commerce API for my developer T-Shirts business.',
    //     image: 'https://www.surrealcms.com/uploads/nodejs-logo.png',
    //     language: [
    //       'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fnodejs-png-nodejs-icon-png-50-px-1600.png&f=1&nofb=1',
    //       'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F1600%2Fmongodb.png&f=1&nofb=1',
    //       'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fredis-2%2F1451%2FUntitled-2-512.png&f=1&nofb=1',
    //     ],
    //   },
    //   {
    //     title: 'Slack Bot',
    //     desc: 'Nerd Bot is a bot that serves a developer on Slack with random programming humors whenever they need to take a little break from code',
    //     image: 'http://cio.ucop.edu/wp-content/uploads/2016/09/Slack-Bot.jpg',
    //     language: [
    //       'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/ruby/ruby.png',
    //       'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png',
    //       'https://user-images.githubusercontent.com/819186/51553744-4130b580-1e7c-11e9-889e-486937b69475.png',
    //     ],
    //   },
    //   {
    //     title: 'Sudo Wear',
    //     desc: 'Sudo Wear in a server e-commerce API for my developer T-Shirts business.',
    //     image: 'https://www.surrealcms.com/uploads/nodejs-logo.png',
    //     language: [
    //       'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fnodejs-png-nodejs-icon-png-50-px-1600.png&f=1&nofb=1',
    //       'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F1600%2Fmongodb.png&f=1&nofb=1',
    //       'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fredis-2%2F1451%2FUntitled-2-512.png&f=1&nofb=1',
    //     ],
    //   },
    // ];
  }

  ngOnInit(): void {
    this.portfolioService.getProjects().subscribe((data) => {
      console.log('projects', data);
      return (this.projects = data);
    });
  }
}
