const menu = [
    {
        id:0,
        title:"JavaScript",
        submenu: [
            {
                id:0,
                title:"Web development",
                articles: [
                    {
                        id:0,
                        title: "JavaScript Basics",
                        language:"JavaScript",
                        text: "JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms; with dynamic styling; with animation, etc. This article helps you get started with JavaScript and furthers your understanding of what is possible. "
                    },
                    {
                        id:1,
                        title: "What is JavaScript?",
                        language:"JavaScript",
                        text: " JavaScript is a powerful programming language that can add interactivity to a website. It was invented by Brendan Eich (co-founder of the Mozilla project, the Mozilla Foundation, and the Mozilla Corporation).JavaScript is versatile and beginner-friendly. With more experience, you'll be able to create games, animated 2D and 3D graphics, comprehensive database-driven apps, and much more!"
                    },
                    {
                        id:2,
                        title: "History of JavaScript",
                        language:"JavaScript",
                        text: 'Brendan Eich created JavaScript in 1995 when he was working at Netscape Communications Corporation. As the Web gained popularity, a gradual demand for client-side scripting languages developed. At the time, most Internet users were connecting over a 28.8 kbps modem even when web pages were growing in size and complexity. Netscape began to think seriously about developing client-side scripting language in an early time, at a cutting-edge time of technological innovation, to handle simple processing. Brendan Eich is the person who worked for Netscape at that time and began developing a scripting language named "Mocha", and later named "LiveScript", for the release of Netscape Navigator 2 in 1995. He was fascinated by Java, Scheme, and Self. Netscape, for some time, made the best browser of that time and enjoyed market supremacy.'
                    },
                    {
                        id:3,
                        title: "Vue.js",
                        language:"JavaScript",
                        text: `In recent years, Google’s ever-popular web development framework Angular has exploded with popularity. It continues to provide a solid base foundation for developers who are working strictly with the latest industry standards and abilities. Angular.js provides a set of modern development and design features for rapid application development. Google has gone as far as creating a separate part of the site that offers the Material Design specification to help you build apps that stay in touch with the most modern approaches there are.`
                    },
                    {
                        id:4,
                        title: "Angular.js",
                        language:"JavaScript",
                        text: 'Brendan Eich created JavaScript in 1995 when he was working at Netscape Communications Corporation. As the Web gained popularity, a gradual demand for client-side scripting languages developed. At the time, most Internet users were connecting over a 28.8 kbps modem even when web pages were growing in size and complexity. Netscape began to think seriously about developing client-side scripting language in an early time, at a cutting-edge time of technological innovation, to handle simple processing. Brendan Eich is the person who worked for Netscape at that time and began developing a scripting language named "Mocha", and later named "LiveScript", for the release of Netscape Navigator 2 in 1995. He was fascinated by Java, Scheme, and Self. Netscape, for some time, made the best browser of that time and enjoyed market supremacy.'
                    },
                    {
                        id:5,
                        title: "jQuery",
                        language:"JavaScript",
                        text: `With the kind of lifespan that this project holds already, even those living under a rock will have heard of jQuery before. Whenever someone wants to extend their website (or mobile page) and make it more interactive; they rely on the functionality of jQuery. This tiny library transforms the whole web into a fully interactive and entertaining experience, with a reported whopping 70%+ of the World’s leading websites having something to do with jQuery. jQuery plugins and widgets are amongst the most searched components within the front-end developer orbit.`
                    },
                    {
                        id:6,
                        title: "React",
                        language:"JavaScript",
                        text: `React is the web programming orbit’s latest crown jewel, even religious Angular.js users have made the switch to React as it allows for more smooth front-end development without the need of immersing in the complexity of a front-end framework. It’s a JavaScript library that Facebook maintains, and the main area of expertise behind React is to help developers implement a Virtual DOM; instead output a value called the Virtual DOM. The developers now diff the Virtual DOM with the current state of the DOM, which generates a list of DOM operations that would make the current DOM look like the new one. They quickly apply this operations in a batch.`
                    },
                    {
                        id:7,
                        title: "Socket",
                        language:"JavaScript",
                        text: `Socket’s gained a lots of momentum in the real-time developer community. With Socket you can enjoy fully functional real-time communication between the client and the server. The developers divided Socket into two different parts. They built the first part, which is the client library, to run from the browser. In contrast, they built the second one, which is the server-library on top of Node.js. Both libraries share a very similar API, and they also made Socket event-driven; much like Node.js is. With Socket, you can implement real-time streaming of binary, instant messaging platforms, and interactive document collaboration. You can also have real-time stats for your apps and projects (analytics), and so much more.`
                    },
                    {
                        id:8,
                        title: "Polymer",
                        language:"JavaScript",
                        text: `Google’s Polymer project doesn’t just spice things up with Material Design. This JavaScript framework is all about fast and modern web design through the ability to create and reuse web components. The project spent a long time in a BETA release. Last year, we saw the first release of a V1 and the project has snowballed ever since.
                                While many are still wondering what is the true difference between Polymer and Angular (since both share many similar traits like code syntax and design features), we know for a fact that Polymer brings about a new kind of development experience that will propel the rest of the industry into a modern web component based development approach.`
                    },
                    {
                        id:9,
                        title: "Node.js",
                        language:"JavaScript",
                        text: `Node.js is very likely to be the most powerful framework that we have seen since the inception of JavaScript. The project has grown incredibly big in a recent couple of years. While many were predicting the downfall of Node.js and the rise of other server-side frameworks, Node.js has maintained its leadership glory to this very day. Node.js has become extremely scalable and versatile with its capabilities, and many developers rank it above technical programming languages such as Java and .NET! (at least for the web)
                        <br>The main purpose of the framework is to help build interaction vigorous web apps. Examples are community sites, content streaming websites, feature heavy one-page apps, and other apps that rely on heavy data interaction. The creators built Node.js on top of Google’s V8 JavaScript engine. Beginners can easily learn this open-source project. Also, developers who come from other languages can easily pick this too. The learning curve is the same for everyone.`
                    },
                    {
                        id:10,
                        title: "Meteor",
                        language:"JavaScript",
                        text: `Meteor has grown from a simple inspirational idea into a fully functional and funded project. It tuned into home to thousands of enthusiastic developers. It has revolutionized the development of real-time mobile and web applications that users can build from a singular development interface. You can convert your existing web apps into mobile apps and publish them on popular app stores! Any web application built with Meteor is also automatically compatible with mobile devices.`
                    },
                    {
                        id:11,
                        title: "Mobx",
                        language:"JavaScript",
                        text: `With MobX you will be able to begin observing your data structure, while also having the capability of making your functions reactive. That means they will reassess themselves whenever data is changed in real-time. Take any piece of data from your structure and turn it into a separate row, then turn your functions into auto-updating formulas. MobX’s mission is to help developers simple and effective views that are always fully rendered, without needing the extra fat that other full-render frameworks might bring to the table.`
                    },
                    {
                        id:12,
                        title: "Reactive.js",
                        language:"JavaScript",
                        text: `Ractive has been around for a while. Many of the leading World’s websites have embraced its native functionality for building template-oriented User Interface components that support JavaScript features and flexibility. Creating interactive application like experiences within the browser is not an easy task, it never was, but Ractive is one of those rare frameworks that help to bridge this gap and helps to build for a more seamless experience. Eugene Mirotin from Toptal goes deeper into the capabilities of Ractive and explores the process of building a simple, reactive and interactive application.`
                    },
                    {
                        id:13,
                        title: "Express",
                        language:"JavaScript",
                        text: `We may as well get Express out of the way first, as no list of Node frameworks would be complete without it. Express is still the reigning champion of popular frameworks, as its 47.5K Github stars, 1.8K watches, and 7.7K forks will attest. This alone makes it an excellent choice. It is robust, well-tested, and there is a large community maintaining and working with it who can support you and answer questions.
                        <br> Express touts itself as a “fast, un-opinionated, minimalist framework for Node.” The focus is on performance and providing only what you need. The framework provides little functionality of its own, instead of allowing for extensive middleware chaining to process requests.`
                    }
                ]
            },
            {
                id:1,
                title:"Mobile development",
                articles: [
                    {
                        id:0,
                        title: "React Native",
                        language:"JavaScript",
                        text: "Introduced by Facebook in 2015, React Native is an open-source framework for building cross-platform native apps. Using React and Javascript as programming languages, developers can build mobile apps, indistinguishable from native apps built using Objective-C, Swift, or Java."
                    },
                    {
                        id:1,
                        title: "NativeScript",
                        language:"JavaScript",
                        text: "NativeScript is an open-source framework for building cross-platform native apps with Angular, Vue.js, TypeScript, or Javascript. It empowers web developers to leverage their skill set to build native experiences on mobile.<br> NativeScript enables developers to use Vue CLI, VueX, and other Vue framework features to build native mobile apps. Also, NativeScript integrates with modern Angular full-stack features, such as router support, code generation, integration with Angular CLI, etc."
                    },
                    {
                        id:2,
                        title: "Ionic",
                        language:"JavaScript",
                        text: "Ionic is another popular javascript framework for building hybrid apps. For developers acquainted with web technologies and web app development, understanding the structure of an Ionic app is easy. <br> Hybrid apps run in a full-screen browser called WebView, which is invisible to the users. Through customization native plugins, they can access the native features of mobile devices like camera, touch ID etc, without the core code being connected to the device."
                    },
                    {
                        id:3,
                        title: "Apache Cordova",
                        language:"JavaScript",
                        text: "Apache Cordova (formerly PhoneGap) is a hybrid app development framework that wraps HTML or Javascript apps into a native container. There is a long list of tools, frameworks, and cloud services that are available to augment the performance of Cordova. Some of the popular names include Visual Studio, Ionic, Framework7, Monaca, Mobiscroll, etc. Considering the potential that Cordova brings in, the contributors to this framework are some of the tech giants, including Adobe, Microsoft, Blackberry, IBM, Intel, etc."
                    }
                ]
            }
        ]
    },
    {
        id:1,
        title:"Java",
        submenu: [
            {
                id:0,
                title:"Web development",
                articles: [
                    {
                        id:0,
                        title: "Spring",
                        language:"Java",
                        text: "With its concept of Dependency Injection and aspect-oriented programming features, Spring took the development world by storm. It is an open-source framework used for Enterprise applications." + 
                        "With Spring, developers can create loosely coupled modules where-in dependencies are handled by the framework rather than depending on the libraries in the code. <br> Spring framework is exhaustive and covers a lot of features including security and configuration, which are easy to learn. Further, since it is the most popular web framework, you can find a lot of documentation and an active community."
                    },
                    {
                        id:1,
                        title: "Struts",
                        language:"Java",
                        text: "Apache Struts is another robust open-source framework for web applications. It follows the MVC (Model-View-Controller) model and extends the JSP API. In a traditional servlet-JSP approach, if a user submits let’s say a form with his details, the information then goes to a servlet for processing or the control goes over to next JSP (Java Server Pages – where you can write Java code in an HTML). This becomes confusing for complex applications as the ‘View’ or presentation layer should ideally not have business logic."
                    },
                    {
                        id:2,
                        title: "Hibernate",
                        language:"Java",
                        text: "Though Hibernate is not a full-stack framework, it completely changed the way we looked at the database. Implementation of Java Persistence API (JPA), Hibernate is an Object-Relational-Mapping (ORM) database for Java applications. Just like SQL, queries in Hibernate are called HQL (Hibernate Query Language)." +
                        "Hibernate directly maps Java classes to corresponding database tables and vice versa." + "The main file in hibernate is the hibernate.cfg.xml file that contains information about mapping Java classes with database configuration."
                        +"Hibernate solves the two major problems with JDBC – JDBC doesn’t support object-level relationship and if you ever decide to migrate to a different database, the older queries may not work – meaning a lot of changes – i.e. time and money!" +
                        "Hibernate provides an abstraction layer so that the code is loosely coupled with the database. Stuff like establishing a database connection, performing CRUD operations are taken care of by Hibernate – so developers need not implement that, hence making the code independent of the database used."
                    },
                    {
                        id:3,
                        title: "Apache Wicket",
                        language:"Java",
                        text: "If you have already worked with JSP, the learning wicket will be a cakewalk. A simple Java web frameworks, Wicket has a component-oriented structure and all you need to know is Java and HTML. Absolutely no XMLs or configuration files!" +
                        "The main feature of Wicket is it POJO model wherein components are simple (Plain Old) Java Objects having OOP features. These components are bundled together as reusable packages with images, buttons, forms, links, pages, containers, behaviours and more so that developers can customize them."
                    }
                ]
            },
            {
                id:1,
                title:"Mobile development",
                articles: [
                    {
                        id:0,
                        title: "How do I get Java for Mobile device? ",
                        language:"Java",
                        text: " Java capability for mobile devices is generally integrated by the device manufacturers. It is NOT available for download or installation by consumers. You need to check with your device manufacturer about availability of this technology in your device. <br>" + 
                        "Some PDAs (Blackberry, Palm), tablets (iPad, Android, Windows Surface RT), smart phones (iPhone, Android), gaming consoles (Nintendo Wii), MP3/MP4 players (iPod), and other personal mobile devices do not support the Java plug-in. See your device manufacturer's website to determine if Java is available for your specific device. <br>"
                    },
                ]
            },
            {
                id:2,
                title:"Desktop development",
                articles: [
                    {
                        id:0,
                        title: "Swing",
                        language:"Java",
                        text: " As part of the Java framework, SWING graphical user interface toolkit is an excellent cross-platform application development language. With Swing, you can make excellent desktop applications that comply with the desktop app frameworks used by Windows. The entire reason that Swing was developed was to provide a better set of graphical user interface components. Since Swing emulates the look and style of many platforms, it is one of the best cross-platform desktop frameworks out there. It provides many different components that can be used in the Java environment including the typical buttons and checkboxes, but also scroll panes, tables, lists, and tabbed panels. <br>" + 
                        "All swing applications and components are made with the Java programming language and are platform-independent. Some of the advantages of using Swing for a Windows desktop app is that it has a high degree of flexibility and a deep reliance on runtime mechanisms that allow it to respond to changes in its settings at run-time. This allows Swing applications to hot-swap its interface while it is running. Swing also provides component extras to better the user experience including decorative borders for components and component tooltips. <br>"
                    },
                ]
            }
            
        ]
    },
    {
        id:2,
        title:"Python",
        submenu: [
            {
                id:0,
                title:"Web development",
                articles: [
                    {
                        id:0,
                        title: "Django",
                        language:"Python",
                        text: " Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source. "
                    },
                    {
                        id:1,
                        title: "Flask",
                        language:"Python",
                        text: "Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions."
                    }
                ]
            },
            {
                id:1,
                title:"Mobile development",
                articles: [
                    {
                        id:0,
                        title: "Why is Python a great language for mobile app development",
                        language:"Python",
                        text: "Python is an excellent language for mobile app development because it’s easy to read and write, simple to understand, and powerful when solving complex problems. It has a very comprehensive standard library that allows you to connect the language with 3rd party APIs or modules. <br>"+
                        "Python can be used on various platforms such as iOS, Android, Windows phones, and desktops. " + "Many Python frameworks help build mobile apps in a shorter time. Some of them are Kivy, BeeWare, or PyQT. Additionally, Python is a great language for prototyping and can test out new ideas on the go using an app."
                    },
                    {
                        id:1,
                        title: "hat is the Kivy framework, and why should we use it for mobile app development",
                        language:"Python",
                        text: "Kivy is a cross-platform framework that allows you to build apps and games on various Windows, Linux, macOS, iOS, and Android platforms. It runs on several hardware, including Raspberry Pi. <br>"
                        + "Kivy has an extensive python library that includes many features such as multitouch events, accelerometer events, etc. It provides multitouch gestures that help develop rich user experiences without much effort.<br>" +
                        "Kivy also allows you to use native libraries on different platforms. This means that you can directly call functions from the underlying platform and access features that are not available in Python. <br>" +
                        "For example, on Android, you can access the camera and microphone using Java code. Kivy also provides a custom windowing system that gives you more control over how your app looks and feels. You can also create your own widgets using Kivy’s custom widget language."
                    }                    
                ]
            },
            {
                id:2,
                title:"Desktop development",
                articles: [
                    {
                        id:0,
                        title: "Why we should use Python for Desktop Applications",
                        language:"Python",
                        text: "Easiest and Convenient<br>" + "Python is an easy programming language even for beginners, and frameworks make it the most accessible programming for web and desktop apps; this makes Python one of the most used programming languages around the world. In addition, Python has many tools, huge collections in libraries, and integrated features with a vast user base. Also, Python keeps adding new stuff in every department that making things easier for developers.<br>" +
                        "Quicker Prototyping<br>" + "It takes less time in development when you work with Python rather than other programming languages. In addition, a huge user base provides Python with a massive collection of python libraries that can be convenient in python development.<br>"

                    },
                    {
                        id:1,
                        title: "PyQT",
                        language:"Python",
                        text: "PyQT is an Application and GUI toolkit framework with one of the most powerful and popular Python interfaces. It has the Qt library and python programming language that allows the developer to create programs by coding and create visuals by Qt Designers. <br>"
                        + "PyQT is free-to-use binding software with open-source widget toolkit QT implemented, Python framework that can help developers build cross-platform, web, desktop, and mobile applications. It is available for all platforms, including Windows, macOS, mobile, and Linux."
                    },
                    {
                        id:2,
                        title: "Tkinter",
                        language:"Python",
                        text: 'Tkinter is one of the most popular programming frameworks for Desktop apps and GUIs. It is a combination of the Tk and Python GUI frameworks. It is named Tkinter because of its simple UI and UX; development beginners can easily use it for python desktop applications. '
                    }
                ]
            }
            
        ]
    },
    {
        id:3,
        title:"C++",
        submenu: [
            {
                id:0,
                title:"Desktop development",
                articles: [
                    {
                        id:0,
                        title: "Why choose C++ for your desktop application development project?",
                        language:"C++",
                        text: "C++ is a very prestigious language for its use in operating systems, games and low-level programming languages that require better control of the hardware on either the server or PC.  There is no denying that it is a well-rounded language if you consider the terms of target applications and platforms. If you want to run an application on computer hardware directly or a language that deals with desktop application development, this is certainly a most suitable option for you. Here is why switching to C++ for desktop application development "
                        + "Somewhat faster Code<br> C++ usually has no standard user interface, the code for user-interface is written in the native language while C + + is used for the business logic. Java has JVM-optimized byte-code that can generate fast code, but native, i.e. machine code can be faster and beneficial in domains such as gaming, physics simulations and signal processing. However, you can do all of that in Java using JNI for low-level access, that adds a small overhead and that's why native language like C++ has a slight speed advantage."
                    },
                    {
                        id:1,
                        title: "Advantages of C++",
                        language:"C++",
                        text: "Portability: C++ offers the feature of portability also known as platform independence which lets the user run the same program on different operating systems or interfaces easily. For example, you write a program in LINUX OS, and for some reason, you switch to Windows, in that case, you would be able to run the same program in windows as well without any glitch. This feature has been a great help to the developer.++.<br>"
                        + "<br>Object-oriented: The greatest advantage of C++ is the feature of object-oriented programming that involves concepts like classes, inheritance, polymorphism, data abstraction, and encapsulation that enable code reusability and makes a program even more secure. Besides, it also helps us deal with real-world problems by interpreting data as an object. C was previously lacking this feature and so it was created, proving to be of highly significant. This feature gave birth to numerous job prospects and the future of c++ programming and development. ++.<br>"
                        + "Low-level manipulation: Since C++ is closely related to C, which is a procedural language closely linked to the machine language, C++ provides low-level manipulation of data at a specific level. That is the reason why Embedded systems and compilers are developed with the help of C++.<br>"
                        + "Multi-paradigm: C++ is a multi-paradigm programming language. The phrase “Paradigm” refers to programming style. It involves logic, structure, and procedure of the program. The three paradigms of C++ are generic, imperative, and object-oriented.  Generic programming means to use a single approach to serve several objectives. Imperative programming, on the other hand, means to use the statements that change a program’s status."
                    }
                ]
            },
            {
                id:1,
                title:"Game development",
                articles: [
                    {
                        id:0,
                        title: "C++ in the gaming industry",
                        language:"C++",
                        text: `Game developers have been building games with C++ for decades. C++ allows you to develop games across various platforms, including Windows, Mac, Linux, Android, and iOS. You need a game engine to create games, and C++ is used in numerous 2D game engines and 3D game engines. Godot and Unreal Engine, for instance, use C++ as their scripting language. The Unity game engine is written in C#, but its runtime language is C++. By now, many gaming APIs are written in C++. Its popularity is not the reason it’s great for game development, though.  C++ has stark advantages for game development when it comes to ensuring high performance. High performance (i.e. minimum latency) is an essential requirement for game design. During gameplay, several objects need to move in a given second. Even one extra second of lag can break immersion for game players. Because C++ allows you to speak to machine hardware, you can manipulate hardware and control memory management to optimize applications for speed. `
                    },
                    {
                        id:1,
                        title: "Why you should learn C++ for game development",
                        language:"C++",
                        text: `Anyone who’s serious about working in the game industry should learn C++. C++ code allows you to speak directly to hardware and optimize your applications in ways that aren’t possible when using higher-level languages. This ability to take ownership of hardware components will make you a more nimble and competitive game programmer.If you’re not interested in game development, you should learn C++ anyway. Whether you’re already a software engineer or new to software development, there’s a lot to gain from learning an intermediate language like C++. You’ll understand far more about how computers operate because of its low-level language components. `
                    }
                ]
            },
        ]
    },
    
]