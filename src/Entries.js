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
            p1: 'So I thought about the problem I had yesterday, all night & morning long. I decided that since I could see the previous committed code in my repo history, I would re-create the files.  So that is what I did. I went thru the painfully slow process of re-creating everything.  I ran it to make sure it was working correctly without being deployed. Then pushed it up to up to GitHub. All looks great! So I am going to deploy it, and all should be well again, right? WRONG!!! I deployed it, and all of my files disappeared just like they did yesterday!?!?!? I double-check everything! I do not understand how this is happening! ', 

            p2:'Again, I went thru the process of trying to revert the code.  It does not revert again! So I skip to re-creating the files a 2nd time. Test it, working correctly. All files are in the repo. I deploy it and lose everything again!!!!',

            p3: 'At this point, I am thinking to myself, why did I want to be a developer again?  Oh yeah, I like challenges. I like solving puzzles. I like making stuff. I love the feeling I get when I build an app & show it to others for the 1st time. But this one has me stumped!',

            p4: 'I had also noticed that my repo was acting weird. Like it would not show me all of my commits every time. Sometimes it would only show four commits instead of the 16 that should be showing. So then I got to wondering if maybe I had done something in all of my attempts to revert/restore/recreate that I corrupted my repo. So I did what any self-respecting Dev would do, I built a new repo to re-create my project in it.',

            p5: 'I copied the same code over into the new repo from the commit history that I had been using. I tested it, and it worked. I then added the deployment code for GH Pages. Deployed the app, and it deployed properly on the 1st attempt!!!!!!! *hallelujah*',

            p6: 'I still do not know what happened in the 1st repo or what went wrong when I tried to deploy it to Vercel, but it was a learning experience! Also, a great reminder that sometimes it is best to stick to what you know!'
        }
    },
    {
        title: 'Jan 6, 2021',
        content: {
            p1: 'Today I spent the bulk of my day working on minor fixes.  I changed the booter styling on several of my apps that have unified looks (Video Player, Picture Finder, Widgets, Coding Journal). I am trying to present several apps on my project site as unified learning pieces. I may eventually link them all together. If I do not link them, then I will need to at least edit the Headers to redirect them back to my website and add a contact me feature.',
            p2: 'Once the styling enhancements had been made, I started in updating the deployed sites.  Video Player which gave me so much trouble the last 2 day, re-deployed with no problems! Picture Finder which originally deployed with no problems, is now giving me problems, similar to what I had the other day with Video Player. So I am not sure what I am doing wrong!',
            p3: 'I also spent a period of time today detailing my experiences with Video Player the last 2 days.  I am getting it ready to publish on LI & either Medium or Dev.  It will be the 1st article that I have published, so I am rather nervous about that!'
        }
    }
]
    

export default Entries;