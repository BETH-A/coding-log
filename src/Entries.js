const Entries = [
    {
        title: 'Jan 1, 2021',
        content: {
            p1: 'To start the new year, I decided to try to log my coding activities for the year.  Today, I worked on debugging an API Key issue I was having with the Translate component of my Widgets app.  I could get the API to respond if I hardcoded the API Key but got a 403 error when I put the API Key in the .env file.',

            p2: 'I finally discovered that I had made an error when I created my .env file.  Rather than putting it in my root directory, it was in my src folder.  Once I moved it, the API Key start working correctly from the .env file.  So lesson learned, make sure to double-check that your .env file is in the root directory!!!'
        }
    },
    {
        title: 'Jan 2, 2021',
        content: {
            p1: 'I continue working on my Widgits app.  I added a Navigation component to the project to allow users to move between the four components (Accordion, Search/List, Dropdown, Translate) without re-rendering the page.  So I created a Header that contained Links to the four components. I also manually created Routes so that you can access the components by URL without re-rendering the page. The app is complete, other than adding some CSS to unify this app with some of my others. ',

            p2: 'I will style & deploy it on Monday, 1/4/2021.'
        }
    },
    {
        title: 'Jan 3, 2021',
        content: {
            p1: 'I got a very, very late start to coding today, so I did not do much. I created this Coding Log react app and added some essential files to get started (App.js, Entries.js, Log.js, index.js). I have not tested it yet to see if working correctly; I will do that tomorrow morning as it is midnight.'
        }
    },
    {
        title: 'Jan 4, 2021',
        content: {
            p1: 'I started the day by testing what I coded up late last night on the Coding Log app.  I quickly came up with an error because I had not yet created any of the entries. LOL So, I summarized what I had done so far and resolved the issue without any others. Added my standard styling to both the Widgets app & the Coding Log. With this completed, I switched back over to the React course that I am taking.', 

            p2: 'The section that I was starting was on Deploying React Apps. The instructor showed us how to deploy our apps via Vercel & Netlify. I decided to deploy my Video Viewer app via Vercel as I have never used it before.',
            
            p3: 'That was the beginning of an exciting and frustrating journey!!! After installing the Vercel CLI & coding up the app to deploy on Vercel, I issued the deploy commands via Terminal. The console indicated it had deployed and provided the link(s) to check it out.  When to look at it & only got a white screen.  I double-checked, triple-checked, and then rechecked my code, only to get the same results each time.  Now I had deployed a React app via GitHub Pages before with no problems, so I decided to deploy it that way instead.',
            
            p4: 'I removed the code to deploy on Vercel & added the code to deploy to GH Pages. Built & deployed the app. Guess what it rendered? That is right, a white page. I went back & double check my code, found an error I had made, and rebuild & deployed.  I checked it, only to see that my README.md was rendering, not the app.  So I started comparing it to the app I deployed just a few days before make sure everything was correct. I tried to build & deploy it again. Again, I only got my README.md.',

            p5: 'When I said I double-checked my code, I was only checking what package.json to make sure I set it up correctly.  So when I got the README.md again, I went to my GH repo to see what was going on.  That is when I discovered that all of the files that I had added were gone!!! The repo was only showing the original React default files. WHAT THE HECK?!?!?! Ok, this will not be too big of a deal; I need to revert to the last commit with all of my code. Thank goodness I had often been committing!!!! So that is what I did. I issued the command to revert the code three commits. Only nothing happened!',

            p6: 'At this point, I am getting frustrated & not sure what to do. So I try to restore the code. I get it restored on my local machine & go to push it up to my repo, only to get an error telling me that the repo is farther along & that I need to pull it before I can add to it.  So I pull the repo, only to lose all of the code again. I go thru this cycle twice more, only to call it a day.  Time to take a break, re-group, sleep on it, and start again tomorrow!'

        }
        
    },
    {
        title: 'Jan 5, 2021',
        content: {
            p1: 'So I thought about the problem I had yesterday, all night & morning long. I decided that since I could see the previous committed code in my repo history, I would re-create the files.  So that is what I did. I went thru the painfully slow process of re-creating everything.  I ran it to make sure it was working correctly without being deployed. Then pushed it up to GitHub. All looks great! So I am going to deploy it, and all should be well again, right? WRONG!!! I deployed it, and all of my files disappeared just like they did yesterday!?!?!? I double-check everything! I do not understand how this is happening! ', 

            p2:'Again, I went thru the process of trying to revert the code.  It does not revert again! So I skip to re-creating the files a 2nd time. Test it, working correctly. All files are in the repo. I deploy it and lose everything again!!!!',

            p3: 'At this point, I am thinking to myself, why did I want to be a developer again?  Oh yeah, I like challenges. I like solving puzzles. I like making stuff. I love the feeling I get when I build an app & show it to others for the 1st time. But this one has me stumped!',

            p4: 'I had also noticed that my repo was acting weird. Like it would not show me all of my commits every time. Sometimes it would only show four commits instead of the 16 that should be showing. So then I got to wondering if maybe I had done something in all of my attempts to revert/restore/recreate that I corrupted my repo. So I did what any self-respecting Dev would do, I built a new repo to re-create my project in it.',

            p5: 'I copied the same code over into the new repo from the commit history that I had been using. I tested it, and it worked. I then added the deployment code for GH Pages. I deployed the app, and it deployed properly on the 1st attempt!!!!!!! *hallelujah*',

            p6: 'I still do not know what happened in the 1st repo or what went wrong when I tried to deploy it to Vercel, but it was a learning experience! Also, a great reminder that sometimes it is best to stick to what you know!'
        }
    },
    {
        title: 'Jan 6, 2021',
        content: {
            p1: 'Today I spent the bulk of my day working on minor fixes.  I changed the booter styling on several of my apps with unified looks (Video Player, Picture Finder, Widgets, Coding Journal). I am trying to present several apps on my project site as harmonious learning pieces. I may eventually link them all together. If I do not connect them, I will need to edit the Headers to redirect them back to my website and add a "contact me" feature',
            p2: 'Once I had made the styling enhancements, I started updating the deployed sites.  Video Player, which gave me so much trouble the last two days, re-deployed with no problems! Picture Finder, which initially deployed with no issues, is now giving me problems, similar to what I had the other day with Video Player. So I am not sure what I am doing wrong!',
            p3: 'I also spent time today detailing my experiences with the Video Player app for the last two days.  I am getting it ready to publish on LI & either Medium or Dev.  It will be the 1st article that I have posted, so I am somewhat nervous about that!'
        }
    },
    {
        title: 'Jan 7, 2021',
        content: {
            p1: 'Today was a bit of a roller coaster for me coding wise.  I wore up feeling confident and excited to get to my computer, but by the end of the day I left, I had been put thru the ringer. Once I got in front of the computer, I realized that I had several non-coding related tasks that I needed to get done before I started coding.  So I got these completed and was ready to begin coding by mid-afternoon.',

            p2: 'I did a few minor coding tasks to get me going because I had two coding assessments for a Developer job application. The assessments are the first coding take-home assessments that I have taken. So I was very nervous about doing them & put them off for a while today. I decided to complete one today & one tomorrow.',

            p3: 'I started with the General Coding assessment, which was the one I was dreading the most.  I knew it would be an algorithm question and in all honesty, I hate doing those! I knew I had to complete it in 1 session within a 24-hour time limit, and I had to use their code editor. I figure these are standard rules for coding assessments, but still new to me and added some additional pressure.',

            p4: 'So the question:',

            p5: '"Have the function Calculator(str) take the str parameter being passed and evaluate the mathematical expression within in. For example, if str were "2+(3-1)*3" the output should be 8. Another example: if str were "(2-0)(6/2)" the output should be 6. There can be parenthesis within the string so you must evaluate it properly according to the rules of arithmetic. The string will contain the operators: +, -, /, , (, and ). If you have a string like this: #/## or #+#(#)/#, then evaluate from left to right. So divide then multiply, and for the second one multiply, divide, then add. The evaluations will be such that there will not be any decimal operations, so you do not need to account for rounding and whatnot."',

            p6: 'I read the question & my mind went utterly blank!!!! I think I read the problem at least four times before I could comprehend what I was reading. It was not that I had not solved questions similar to this before, but I was nervous, stressed, & hate doing algorithms; my brain said nope, not reading this right now. When I did start to comprehend it, it immediately started overthinking it.  I started writing my code in a much more complicated way than was necessary. Long story short, it took way more time than it should have to solve the question, but I did get it solved! Part of the delay was not being familiar with the testing software; part of it was external distractions (dog & dinner). When it finally got the assessment submitted, I was feeling done for the day. So tomorrow, I will tackle the React assessment, and hopefully, it will go much better!'
        }
    },
    {
        title: 'Jan 8, 2021',
        content: {
            p1: 'React coding assessment day!!!',

            p2: 'I started the React coding assessment on the same platform as the General Coding assessment. This time, the assignment was to create a form a user would fill out with their first name, last name, and phone #. It would add their info to a Phone Book/Directory in alphabetical order by last name when they submitted the form.',

            p3: 'All in all, the assessment was not too difficult, but the main obstacle I had was the assessment site.  A big part of this challenge was to design it and make sure it had useful UI. Making sure the design was the way I wanted was more challenging to do to the fact that I could not use Inspect. Again, I had 24 hours to complete this assessment, but I choose to split it up to sleep on it.'
        }
    },
    {
        title: 'Jan 9, 2021',
        content: {
            p1: 'I  completed the React coding assessment today. After sleeping on the challenge, I ended up re-writing much of the code to make it more efficient.  I was not wholly satisfied with the styling but was please enough with it to submit the assessment. ',
            p2: ''
        }
    },
    {
        title: 'Jan 10, 2021',
        content: {
            p1: 'I took today off. & needed to recharge.  Read some of Sprint by Jack Knapp. In addition to strengthening my Dev skillsets, I have been working on building my skills as a Project Manager.'
        }
    },
    {
        title: 'Jan 11, 2021',
        content: {
            p1: 'Today was a PM day.  I was battling an ocular migraine all day, so coding was not really an option, but I was able to read some more of Sprint by Jack Knapp and started the Mentor Mesh PM Accerlator Course.  I am really excited about this course as it will help me build my PM skills. I completed get the Accelerator week 1 course work as it was mainly videos that I could listen to, and then attended the orientation webinar. I am really looking forward to getting back to my React course tomorrow!'
        }
    },
    {
        title: 'Jan 12, 2021',
        content: {
            p1: 'Today was a networking day.  I did not code hardly at all, but I focused my time on attending a few meetings and building a stronger relationship with my LinkedIn connections. I know I should be coding, but I also realize that building a strong network of contacts is just as crucial to my career goals!',
            p2: 'As part of my focus on networking, I went through the invitations that I had sent out on LinkedIn and withdrew all of them more than four weeks old.  I am figuring if they are more than four weeks old, then they do not want to connect with me, are not active on LinkedIn any longer, or they did not see my invite come in. I ended up withdrawing over 800 invites. I want to make sure that I am targeting active connections on LinkedIn and are relevant to my career goals.',
            p3: 'I am, but I am not focusing on the number of connections that I have. I know it is not about the actual number, but what that number represents.  I want a high connection count because I will have more exposure in the tech community and help others find me. I want to put myself in a position to be in demand and have others seeking me for roles rather than being the one to seek them out.'
        }
    },
    {
        title: 'Jan 13, 2021',
        content: {
            p1: 'I only got 3 hours of sleep last night & battling a migraine today, so no coding for me.  I did some reading on Sprint when the migraine allowed. Hopefully, tomorrow will be better!'
        }
    },
    {
        title: 'Jan 14, 2021',
        content: {
            p1: 'Today is a new & better day!  I woke up feeling recharged & ready to work! Yesterday, I thought about attacking my career goals best as they are split into two paths right now. So I have been studying and developing my skillsets as a Developer (Full-Stack & iOS), but I am also interested in being a PM. ',
            p2: 'With my work history, being a PM might be a much better fit for me. I do enjoy development, but I do not have professional experience yet. I know I can get a job as a Developer eventually. But I have experience building and managing teams, so if I focus on that experience and add in my development skills, I could be an effective PM. Now I need to find the right company that is willing to give me a chance to prove myself!',
            p3: 'So, I have decided that I will spend my mornings working on my PM skills and the afternoons working on my Dev skills.',
            p4: 'I worked through two LinkedIn Learning courses as part of the "Becoming A Software Project Manager" learning path this morning. This learning path focuses on exploring project management fundamentals, implementing agile and lean processes, and implementing best practices for software development. I believe this learning path will help me both as a PM and a Developer.',
            p5: 'As I am already a Certified Scrum Master, much of the fundaments are a refresher for me, but the learning path dives into advanced Scrum topics, DevOps Foundations, and Agile Testing.',
            p6: 'This afternoon, I am diving back into React and working on my Coding Log & my website. To my Coding Log, I added links to my website, contact form, LinkedIn, and GitHub to add my Coding Log to my website as a project/blog, and yet users can navigate between them. I am also adding the necessary code to my website to link them. I need to decide if I want this to be a blog on my website navbar or add it to my projects page.'
        }
    },
    {
        title: 'Jan 15, 2021',
        content: {
            p1: 'I spent my morning at the vet with Yogi, but I could do some LinkedIn Learning while waiting at the vet. So was still a productive day.',
            p2: 'This afternoon, I was planning on getting back into my React course but ended up working on many different tasks.  I did some LinkedIn Learning, worked someone my LinkedIn profile, applied for some jobs, attended a fantastic webinar, and networked some.',
            p3: 'So the webinar I attended was hosted by Prentus & featured Clement Kao.  He talked about product management in a way that I have not heard previously.  He spoke about how we should approach our journeys as if we are the product and the companies are the user.  That we should develop ourselves into the best product that the company(user) needs to solve the problem(s) that they have.  His advice was a very profound statement for me.',
            p4: '',
            p5: '',
            p6: ''
        }
    },
    {
        title: 'Jan 16, 2021',
        content: {
            p1: 'Working on setting us a schedule & I decided that Saturday would be my down day.  My day to step away from the computer & focus on other things.  So I did some reading on Sprint & worked some on building my network.',
            p2: '',
            p3: '',
            p4: '',
            p5: '',
            p6: ''
        }
    },
    {
        title: 'Jan 17, 2021',
        content: {
            p1: '',
            p2: '',
            p3: '',
            p4: '',
            p5: '',
            p6: ''
        }
    },
    {
        title: '',
        content: {
            p1: '',
            p2: '',
            p3: '',
            p4: '',
            p5: '',
            p6: ''
        }
    },
    {
        title: '',
        content: {
            p1: '',
            p2: '',
            p3: '',
            p4: '',
            p5: '',
            p6: ''
        }
    },
]    

export default Entries;