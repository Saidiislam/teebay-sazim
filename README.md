<h1> Welcome to Teebay <img src = "https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width = "40"> </h1>

It's a website made with NestJS, GraphQL, Prisma on the backend, PostGreSQL as DB and React, Apollo, Chakra on the frontend.

I've had so much personal growth through this project, it basically whirled me out of my comfortzone to make me adapt with some new. Anyways more on that later. 
I'll begin by going through all of the processes from scratch, so you get more insight on what's really happening behind the curtain, r/ELI5

#[Here's the video showing how to run and what to expect](https://streamable.com/vky5g7)

<h3>💻 Installation</h3>

* Press `Ctrl + Alt + T` to open your terminal.
* There, paste this GitHub clone command `git clone https://github.com/Saidiislam/teebay-sazim.git`.
* It should only take couple of seconds to finish cloning, after that change your directory to the one we just extracted, write `cd teebay-sazim/` and hit enter.
* after that run `code .` to open the directory in VSCOde or you can choose your own favourite one.


<h3>🤔 Project Structure</h3>

* The moment you open the IDE you should notice the two folders, one named 'client' and another 'server', they are similar to what you've just read, one directory acts as the API or DB or Data Provider, whatever you want to name it, and Another is the one who's actucally making the requests, like the customers in the shop, there are always exchanges of requests or items but clients tend to be the one who makes quite oftem, So based on that characteristic, differences between the customer and  the shopkeeper is very obvious to us, Both requires the engagement but one the client is actually the one who's makinng it most of the time and the shopkeeper is fulfilling it, through the exchange of "packets" ofc. And the this act is very similar in our internet side too.

* The "Server" folder has all the data and the "client" folder wwants all the data but one at a time, so there's a middleman or broker as we call it lives in both of these folders who's only aim in life is to make sure the "packets" end up in the other end. 

* Now this "Server" is as we know it, technlogies like, mongoDB, PostGreSQL, Prisma who have all these packet stashes and the "Client"s being "React, NextJS" who wants it all but there are risks involved, so the brokers like GraphQL (Apollo, urql) or REST steps up to transport it at all costs, they also take part in making complex choices which both party lacks to do.

* Now there's couple of reasons many claims graphQl to be Superior, the baddest broker in the badlands, The thing is, when ever the REST broker is tasked with something that is wee bit out of his comfortzone, he either underfetches, meaning he accidentally drops all his stashes in the middle of the road or he overfetches, Bringing in piles nobody ever asked for. Now, graphQL, he's like a trusty mount, only gives what he says, nothing more, nothing less.

* And think about NestJS as a biome or terrain, where it's easy for both of the brokers to quickly and efficiently deliver the stashes, and if the roads ain't easy, be ready for hardships. And prisma can be referenced as a rope in the mountain

By now, I think it's ok for us to drop theology and talk about the actual technicalities.

* I always perfer to use split terminal to run both client and the server at the same time, but for now it should be okay,
* lets open the package.json in the server folder.
* because I am using NestJS framework there are already so many dependencies to look at, but I've managed to install some of the dependencies need for the work, there's bcrypt for hashing the password and if you look at the scripts, I've installed concurrently to paralally run many script instances, and that's pretty much it.
* It's surprising to see how packed NestJS is while being so modular. Before this assignment, I really haven't tried NestJS, but now that I did, I am glad I did, The documentations are top tier, Even their codes are properly commented and documented
* People initially asked me to get going on Schema-First approah, while it has many advantages, like you barely write any code except in resolvers and service where you write the conditions for the query and mutations it has perry serious downsides too like Case sensitive schema writing, in multiple places, nightmare fuel. 
* Oh I've also chose prisma because it looked like the safest option to me, also the prisma CLI is something else entirely!
* 
* split your terminal and run both of the directories like this
* ![terminal](https://i.postimg.cc/6QnMYtvW/image.png)
* 
* Now that I am done talking about the primary technologies, let's look at the code a little bit, open app.module.ts, I have imported the GraphQL module there, also chose `ApolloServerPluginLandingPageLocalDefault()` as my main graphql sanbox plugin as it's far more superior than the default sandbox. 
* let's switch to `generate-typings.ts` where I used GQLDefFactory to generate the deinitions and fields, It'll create a `@generated` folder with all the typing necessary for the 90% CRUD operations. And since I alreay have DTO's being generated for me, I didn;t need the actual DTO's that came prebuilt with the resource. 
* If you open one of the resources, `Produts` or the `users`, you'll notice there are aready crud features, fields, types, gemeratives, wuhatever you call it already mande and ready to get go, waiting for you, all you need to do is put 2 and 2 together, Easilty said right? Well that's what I intially thought, understanding the relationship between services and @resolvers took a lot out of me. Having an entire stack in grasp in the span of 5 days is no easy feat, while I am enjoying this assignment so far, by body is saying the other picture, even as I write this, I haven't slept for past 2 nights.

![wakatime stat](https://i.postimg.cc/L4nNbtfQ/Screenshot-from-2023-03-27-08-39-30.png)  

* Thinking the best possible schema design for this kind of lowScale sytem was definitey a challange for me, drew countless mocks in autodrow.io and after a lot of if and elses, I finially got one. It was about the 5 stages of the product, factory, brought, sold, borrowed, lent, I initally thought to make a table with foreign keys for each of them but it seemed absurd to me, then after a lot of mocking, it clicked, I only need to make badges, tag products with these badges and sort them out. 

* OK now, from the server directory, you can set your ports for the nestJS, run ```npm run dev```  and open up the browser , type `localhost:{your_port)/graphql` to see the sandbox:

![Apollo_sandbox](https://i.postimg.cc/k4Fsxstf/Screenshot-from-2023-03-27-12-00-05.png)

**from here you can run the queries, do mutations, play with params, etc.**

**⚛️ Front-end with React**

![Apollo_sandbox](https://i.postimg.cc/kGLLHwfK/family-guy-css.gif)

I used React with Apollo client, Used Vite as bundler and ChakraUI. I had to rush the development process because I played around poking the dead problwms for far too long when there was a bull named deadline charging right at me, prior , during the BE development process I Ignored the "if a problem can't be solved within one hour, switch" rule way too much, I got stuck with the passport js problem where the JWT sign won't recognize the secrect from env, even when I hard coded the secret, so I after wasting a lot of my time on that I switched to string matching, not a fully battle tested guy but becuse of my delay my FE looks a bit unpolished

