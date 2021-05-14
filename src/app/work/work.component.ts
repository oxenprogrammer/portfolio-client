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
    this.projects = [
      {
        title: 'clinicPesa',
        desc: 'clinicPesa provides you with access to healthcare financing, that is more convenient and affordable than the traditional Insurance, through a digital micro-loans and savings platform for setting aside dedicated healthcare funds used to offset medical bills and purchase drugs in time of need at our registered clinic, hospital or pharmacy.',
        image: 'assets/img/clinicPesa.png',
        languages: [
          'assets/img/icons8-angularjs-48.png',
          'assets/img/icons8-material-ui-48.png',
        ],
        link: 'https://test.clinicpesa.com/#/login',
      },
      {
        title: 'Olympics Articles',
        desc: 'Olympics Articles is a fictitious website where bloggers write articles on sports events.',
        image: 'assets/img/olympics.png',
        languages: [
          'assets/img/icons8-ruby-programming-language-48.png',
          'assets/img/icons8-html-5-48.png',
          'assets/img/icons8-css3-48.png',
        ],
        link: 'https://olym-m.herokuapp.com/',
      },
      {
        title: 'Nerd Bot',
        desc: 'Nerd Bot is a bot that serves a developer on Slack with random programming humors whenever they need to take a little break from code.',
        image: 'assets/img/Slack-Bot.jpg',
        languages: [
          'assets/img/icons8-ruby-programming-language-48.png',
          'assets/img/icons8-slack-48.png',
        ],
        link: 'https://github.com/oxenprogrammer/nerd-bot',
      },
      {
        title: 'My Backend Portfolio',
        desc: 'I built this portfolio backend using NestJs TypeScript as a proof of concept on how easy it it to use TypeScript and a well organized framework that follows DRY and SOLID principles using MVC',
        image: 'assets/img/nestjs_logo.png',
        languages: [
          'assets/img/nest-logo.png',
          'assets/img/icons8-nodejs-48.png',
          'assets/img/icons8-typescript-48.png',
          'assets/img/icons8-postgresql-48.png',
          'assets/img/icons8-docker-48.png',
        ],
        link: 'https://github.com/oxenprogrammer/portfolio-server',
      },
      {
        title: 'Sudo Wear',
        desc: 'Sudo Wear is a NodeJs server e-commerce API for my developer T-Shirts business.',
        image: 'assets/img/nodejs.png',
        languages: [
          'assets/img/icons8-nodejs-48.png',
          'assets/img/icons8-mongodb-48.png',
          'assets/img/icons8-redis-48.png',
        ],
        link: 'https://github.com/oxenprogrammer/sudowear',
      },
      {
        title: 'Afro Fashion',
        desc: 'HTML & CSS Capstone Project is based on an online website for a an imaginary annual African fashion show in Kampala, Uganda. Built to demonstrate knowledge gained from the HTML and CSS3 module over the first 3 weeks of joining Microverse.',
        image: 'assets/img/afro-fashion.png',
        languages: [
          'assets/img/icons8-html-5-48.png',
          'assets/img/icons8-css3-48.png',
          'assets/img/icons8-bootstrap-48.png',
        ],
        link: 'https://oxenprogrammer.github.io/dev-conference/',
      },
    ];
  }

  ngOnInit(): void {
    // this.portfolioService.getProjects().subscribe((data) => {
    //   console.log('projects', data);
    //   return (this.projects = data);
    // });
  }
}
