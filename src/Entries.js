const Entries = [
    {
        title: 'Jan 1, 2021',
        content: 'To start off the new year, I decided to try to log my coding activities for the year.  So today, I worked on debugging an API Key issue I was having the Translate component of my Widgets app.  I could get the API to respond if I hard coded the API Key, but was getting a 403 error when I put the API Key in the .env file.  Finally discovered that I had made an error when I created my .env file.  Rather than putting it in my root directory, it was in my src folder.  Once I moved it, the API Key start working correctly from the .env file.  So lesson learned, make sure to double check that you .env file is in the root directory!!!'
    },
    {
        title: 'Jan 2, 2021',
        content: 'I continue working on my Widgits app.  I added a Navigation component to the project to allow users to move between the 4 components (Accordion, Search/List, Dropdown, Translate) without having to rerender the page.  So a Header was created that contained Links to the 4 components. I also manually created Routes so that you can access the components by URL without rerendering the page. So other than some CSS to unify this app to some of the others on my website & deploying it, it is completed.  I will style & deploy it on Monday, 1/4/2021.'
    },
    {
        title: 'Jan 3, 2021',
        content: 'Got a very, very late start to coding today, so did not do much. I created this Coding Log react app and added some basic files to get started (App.js, Entries.js, Log.js, index.js). Have not tested it yet to see if working correctly, will do that tomorrow morning as it is midnight now.'
    },
    {
        title: 'Jan 4, 2021',
        content: 'Started the day with testing what I coded up late last night on the Coding Log app.  Quickly came up with an error because I had not yet created any of the entries. LOL So, I summarized what I have done so far and hopefully this will resolve the issue without any others.'
    }
]
    

export default Entries;