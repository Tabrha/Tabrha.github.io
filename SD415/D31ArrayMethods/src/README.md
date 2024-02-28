[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/jw0hwg9a)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=14063051)
## SD540-Event-Loop
### Update the `README.md` file, to include the answers to the following questions:


1. What is LibUV?

LibUV:-
         -> is a multiplatform library that enables efficiency of the event driven and asynchronous programming and contributing to the efficiency of the Node.js. 

LibUV includs:-
    Event loop:- 
             -> is efficiently manages and dispatches events, this event driven architecture is essential for non-blocking and concurrent programming.
    Thread Loop:- 
             -> is handling certain types of blocking operations, ensuring that the event loop remains responsive even when dealing with tasks that might block the main thread.  

3. Explain the difference between `setImmediate(f)` and `setTimeout(f, Time)`? 

 Both functions used for scheduling code to be executed in the future, but they have different operations in the context of Node.js.

setTimeout: `setTimeout(f, Time)`;
          -> is a standard JavaScript function.
          -> commonly used in both browsers and Node.js.
          -> The time specified in setTimeout is not a guaranteed minimum time. 
          -> The actual execution may be delayed due to other tasks in the event loop.
          -> It is affected by the minimum timeout resolution. 


setImmediate:  `setImmediate(f)`;
            -> is not a standard part of the ECMAScript specification.
            -> It schedules the provided function (f) to be executed in the next iteration of the event loop, after I/O events.
            -> It is designed to execute the provided   function as soon as possible, right after the  current event loop cycle.
            -> setImmediate can be more efficient than setTimeout for scheduling immediate tasks in the Node.js event loop.

4. Explain the difference between `process.nextTick(f)` and `setImmediate(f)`?

Both are mechanisms in Node.js for scheduling asynchronous code  and not part of ECMAScript,
but they have differences that are not immediately obvious or easily noticeable in terms of when the provided function (f) is executed in relation to the event loop.

process.nextTick:-  `process.nextTick(f)`; "right after the current operation completes".
             -> is a method in Node.js that allows a callback function (f) to be executed on the next iteration of the event loop, right after the current operation completes.
             -> It has a higher priority than other async operations, including I/O operations,  
            
setImmediate:  `setImmediate(f)`;  "right after the  current event loop cycle"
            -> It schedules the provided function (f) to be executed in the next iteration of the event loop, after I/O events.
            -> It is designed to execute the provided   function as soon as possible, right after the  current event loop cycle.

5. Explain the difference between `process.nextTick(f)` and `queueMicrotask(f)`?
Both are mechanisms in JavaScript for scheduling microtasks, but they have slitly differences in terms of when the provided function (f) is executed in relation to the event loop.

process.nextTick:- `process.nextTick(f)`
                 -> is managed by Node.js
                 -> It is not part of the ECMAScript standard. 
                 -> It has a higher priority than queueMicrotask.
                 -> it is not part of the event loop.
                 -> it queues a callback function (f) to be executed on the next iteration of the event loop, after the current operation completes  but before any I/O events are processed.
queueMicrotask:- `queueMicrotask(f)`
                 ->it is managed by V8.
                 -> It is part of the ECMAScript standard.
                 -> It has a higher priority than other async operations but lower than process.nextTick.
                 -> It is not part of the ECMAScript standard. 
                 -> it is not part of the event loop.

6. Name 10 of Node Core modules

     1. fs(File System)                    2. http
     3. path                               4. events
     5. os(operating System)               6. util
     7. crypto                             8. querystring
     9. stream                             10. url

7. Name 10 of Node Global objects

     1. global                             2. process
     3. console                            4. module
     5. require                            6. --dirman
     7. --filename                         8. setImmediat
     9. setTimeout                         10. clearTimeout


  
#### Navigate to the `test` folder, run `npm i`
Write down your observation and explain what happens in Node when you run the following commands:
   * `npm run start`  
   * For Windows: `SET UV_THREADPOOL_SIZE=2 && npm run start`
   * For MacOS: `export UV_THREADPOOL_SIZE=2 && npm run start`

When the thread pool size is changed, the output concurrently varies as well.  



