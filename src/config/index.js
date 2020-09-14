module.exports = {

    author: "@Edwin Andrew",
    siteTitle: "Edwin Andrew",
    siteShortTitle: "Edwin Andrew", // Used as logo text in header, footer, and splash screen
    siteDescription: "Edwin Andrew Portfolio",
    siteUrl: "https://gatsby-starter-portfolio-minimal.netlify.app/",
    siteLanguage: "en_US",
    siteIcon: "src/favicon1.png", // Relative to gatsby-config file

    splashScreen: true, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@edwinandrew96
    mediumRssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40edwinandrew96&api_key=bxnahj6wgezd4yeeyot2vfnykmbpkya1bwrcymef",
    shownArticles: 3,
    
    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/edwinandrew1/"
        },
        {
            name: "Medium",
            url: "https://medium.com/@edwinandrew96"
        },
        {
            name: "Github",
            url: "https://github.com/edwinandrew"
        },
        ///{
            ///name: "Behance",
           /// url: "https://www.behance.net/"
        ///},
    ],
  
    navLinks: {
        menu: [
            {
                name: "Articles",
                url: "/#articles",
            },
            {
                name: "About Me",
                url: "/#about",
            },
            {
                name: "Projects",
                url: "/#projects",
            },
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    footerLinks: [
        {
            name: "Privacy",
            url: "/privacy"
        },
        {
            name: "Imprint",
            url: "/imprint"
        },

       
    ]
}