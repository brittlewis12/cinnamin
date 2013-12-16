cinnamin
===

## user stories
* as a user, I'd like to send a message to a friend so we can communicate quickly and simply
* ..., I want my messages to go through & arrive as immediately as possible
* ..., I'd like only my friend to receive/be able to access this message so our conversations are private
* ..., I'd like my message history with my friend to be saved so we can review our conversations if we want to
* ..., I'd like my messages to be securely sent so no one else can intercept my message and read it
* ..., I'd like be be able to send group messages to a specific group of people so I can communicate conveniently with more than one person at a time
* ..., I'd like to see the specific time that messages were sent historically
* ..., I'd like to have a visual indication that someone is responding to me, so I know to stay and wait/not send another message
* ..., I don't want to ever refresh/change the page, so it's a smooth and easy experience
* ..., I want to only see one chat at a time, but be able to switch threads very easily so I can focus on one conversation
* ..., I want to be able to bind simple shortcuts to a particular message thread so I can switch easily between threads
* ..., I want to be able to send pictures too.


## technology
* thin
* faye
* redis
* backbone

## notes
* faye
    * [Faye Architecture](http://faye.jcoglan.com/architecture.html)
        * "...the Server’s job is simply to wrap the operations with the Bayeux protocol and validate incoming messages."
    * [Rails + Redis + Node](http://liamkaufman.com/blog/2013/02/27/adding-real-time-to-a-restful-rails-app/)
        * I'll replace node with faye for the websockets/publish & subscribe implementation


## authentication & authorization
* generate a token when a user signs in and embed it into the session
* publish the chat token to redis & what groups they are authenticated for (group_id)
* render the token into the js
