
export const menu=[
    {
      "name": "Home",
      "icon": "🏠",
      "link": "/"
    },
    {
      "name": "Explore",
      "icon": "🔥",
      "link": "/feed/explore"
    },
    {
      "name": "Subscriptions",
      "icon": "📺",
      "link": "/feed/subscriptions"
    },
    {
      "name": "Library",
      "icon": "📚",
      "link": "/feed/library"
    },
    {
      "name": "History",
      "icon": "🕒",
      "link": "/feed/history"
    },
    {
      "name": "Watch Later",
      "icon": "⏳",
      "link": "/playlist?list=WL"
    },
    {
      "name": "Liked Videos",
      "icon": "👍",
      "link": "/playlist?list=LL"
    },
    {
      "name": "Trending",
      "icon": "📈",
      "link": "/feed/trending"
    },
    {
      "name": "Music",
      "icon": "🎵",
      "link": "/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ"
    },
    {
      "name": "Gaming",
      "icon": "🎮",
      "link": "/gaming"
    },
    {
      "name": "Live",
      "icon": "🔴",
      "link": "/live"
    },
    {
      "name": "Sports",
      "icon": "⚽",
      "link": "/channel/UCEgdi0XIXXZ-qJOFPf4JSKw"
    },
    {
      "name": "News",
      "icon": "📰",
      "link": "/channel/UCYfdidRxbB8Qhf0Nx7ioOYw"
    }
  ];
  

  // export const videoData=[
  //   {
  //    vidSource:"https://www.youtube.com/embed/TlB_eWDSMt4?",
  //    title:"Node.js Tutorial for Beginners: Learn Node in 1 Hour",
  //    comment:[
  //     " Want to master Node.js?\n- Check out my complete course: https://mosh.link/nodejs-course\n- Subscribe for more awesome content: https://goo.gl/6PYaGF",
  //     "Great tutorial. Some minor changes now in 2024: VSCode expects the imports and exports to be written in ES6 format, but you can just ignore those warnings.\n\nAlso, if you want to use promise style event handling instead of callbacks, some libraries like fs has the property .promises to get the same functions but with promises:\n\nconst fs = require('fs').promises;",
  //     "جناب همدانی خیلی عالیه . با این ویدیو واقعا علاقه مند به node js شدم. قبلا جسته و گریخته و با اکراه ازین ور و اون ور یادگرفته بودم. اما این آموزش خیلی اصولی بود و جوانب مختلف رو دیده بود که باعث شد واقعا بهش علاقه مند بشم. متشکرم",
  //     "Test due in an hour and 30 mins. Let’s goooooooooooooo",
  //     "the music so therapic and it make me sleep.",
  //     "thanks",
  //     "Project due tomorrow. 1.75 speed. Let’s go",
  //     "This guy deserves serious appreciation for sure. sharing such a wealthy knowledge for free of cost",
  //     "I watched this right before an interview, and the question about windows came up. I never knew about Node.js. I answered right that there is no windows object in Node and the interviewer was like you got it right, it was a tricky question. Thanks, Mosh. I will be going to the final step of the interview next week. Wish me luck all.\n\nI Got the Job ",
  //     "Thanks Sir",
  //     "\"I started learning Node.JS after a breakup.\"",
  //     "There's a difference between knowing something well and TEACHING it well. You have both rare skillsets my friend. Thank you, from a 56-year-old expanding his knowledge base. I will be signing up for your courses.",
  //     "how can i do that by windows \nplease",
  //     "Great video, still a great place to start in 2021",
  //     "you're the perfect guy to hold the Javascript mic.\nBig up for your efforts ..\nthank you soo soo much\n..",
  //     "IT'S HARD TO FIND WORDS TO DESCRIBE HOW GOOD YOU ARE MOSH! I JUST WANNA SAY THANK YOOU, YOU'RE DOING AN AMAZING WORK! FROM BRAZIL",
  //     "I learned a lot from a 5 year old video. So simple, so clear, so good. Thanks.",
  //     "Very nice video, thanks! Can I ask you why you start write code from the second line?",
  //     "I love your teaching",
  //     "I did struggle a lot to learn NodeJS. I wasted a lot of time. \nThe problem? I did not know the basics of Javascript in first place. You need to walk before you can run.\nSo I took a few very basic books (books, not complex tutorials!) and learned the fundamentals.\nAfter I learned the basics of Javascript, learning NodeJS became much easier.\nEdit: For those asking about the books, for the very basics I learned with Javascript In Less than 50 Pages. \nAnd to develop my knowledge I learned with Head First Javacript Programming.",
  //     "I'm here for our capstone project, wish me luck guys.",
  //     "Whenever I start learning something new I look for the best and the simplest explanation which i get from Mosh all the time",
  //     "Completed Let's goo",
  //     "thanks for the video.",
  //     "Man. I spent months learning React as my first JS framework and it felt very complex and overwhelming to me for the longest time. Now, after starting to dabble in Node, this feels WAY easier than React.",
  //     "seriously 20 mins in and you already summed up 2 of my university lectures.  No joke, my prof spent that long trying to explain what node actually is. Thank you!",
  //     "Mosh is it. He carefully breaks down each topic just the way a beginner can process. It just clicks right in. I mean all the complicated topics and concepts that I've been struggling to get. I wish he just keeps making tutorials for all the major programming languages and frameworks out there. I have $15 per month, all accessible subscription through his site and by far the best programming investment I've ever made. My hats off to you, Mosh.  You are the man!",
  //     "great vid",
  //     "Thanks Mosh",
  //     "the way you teach is so satisfying, I can tell you've a lot of experience",
  //     "Dude, I love watching Your vids. You have one of the most pleasant speaking and teaching styles out there! Plus the content, editing, recording quality, background music... Everything is perfect! Keep up the good work, please! ;)",
  //     "Understood every single bit of it. Thank you Mosh. Great tutorial !!!",
  //     "Mosh is a true teacher.",
  //     "It's a really high-quality tutorial. Thx!",
  //     "My goodness. You have seriously set the standard for programming tutorials. This is amazing.",
  //     "This video is finally getting me out of my Python rut, and realizing that async development isn't as hard as I've made it out to be in my head. Fantastic stuff.",
  //     "These videos are the most fun I've had in a while. I didn't even wanna learn NodeJS tbh, but you made it so appealing that I got my laptop out, downloaded everything, and followed along. You made something that seemed scary to me attainable. Thank you Mosh, you're a real one! I found you from Coder Coder ",
  //     "Very helpful to get to know what is Node, thanks Mosh!!",
  //     "Thanks a bunch mosh... You explained it in easiest way..",
  //     "This was so simple and easily explained! Great job, Mosh!"
  // ]
  //   }
  // ]

  

  