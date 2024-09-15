import "./styles/globals.scss";

import { TypexProvider } from "./hooks/useTypex";

import { forwardRef } from "react";

import EditorContent from "./components/editor-content";
import Toolbar from "./components/toolbar";
import { defaultExtentions } from "./extentions";
import BubbleMenu from "./components/bubble-menu";
import { TableBubbleMenu } from "./extentions/Table";

const content = `
    <h1>Understanding the Basics of Web Development</h1>
    
    <p>Web development is an essential skill in the modern world, where websites and web applications form the backbone of much of the internet. In this article, we will explore the basic concepts of web development, providing a foundation for anyone looking to get started in this exciting field.</p>
    
    <h2>Frontend vs Backend Development</h2>
    
    <p>Web development can be divided into two main categories: frontend and backend development.</p>
    
    <h3>Frontend Development</h3>
    <p>Frontend development is concerned with what users see and interact with in a web browser. It involves technologies like <code>HTML</code>, <code>CSS</code>, and <code>JavaScript</code>. The goal of frontend development is to create a responsive, visually appealing, and user-friendly experience.</p>
    
    <h3>Backend Development</h3>
    <p>Backend development, on the other hand, deals with the server-side of web applications. It includes handling databases, APIs, and server logic. Common backend languages include <code>Node.js</code>, <code>Python</code>, and <code>PHP</code>.</p>
    
    <blockquote>
        "Backend development is like the engine of a car—it’s not visible to the user, but without it, the system wouldn’t run."
    </blockquote>
    
    <h2>Key Technologies to Learn</h2>
    
    <p>To become a web developer, there are several key technologies you should learn:</p>
    <ul>
        <li><strong>HTML:</strong> The structure and content of web pages.</li>
        <li><strong>CSS:</strong> Styles the appearance of web pages.</li>
        <li><strong>JavaScript:</strong> Adds interactivity to web pages.</li>
        <li><strong>Version Control:</strong> Systems like Git to manage code changes.</li>
        <li><strong>Web Frameworks:</strong> Libraries like React, Vue, or Angular for building user interfaces.</li>
    </ul>

    <h2>Basic HTML Structure Example</h2>
    
    <p>Here’s a basic example of an HTML structure:</p>
    
    <pre>
<code>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first web page.</p>
</body>
</html>
</code>
    </pre>

    <h2>Comparison of Frontend and Backend Technologies</h2>
    
    <p>Here’s a simple comparison table for popular frontend and backend technologies:</p>
    
    <table>
        <thead>
            <tr>
                <th>Frontend Technologies</th>
                <th>Backend Technologies</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>HTML</td>
                <td>Node.js</td>
            </tr>
            <tr>
                <td>CSS</td>
                <td>Python (Django/Flask)</td>
            </tr>
            <tr>
                <td>JavaScript</td>
                <td>PHP</td>
            </tr>
            <tr>
                <td>React</td>
                <td>Ruby on Rails</td>
            </tr>
            <tr>
                <td>Vue.js</td>
                <td>Java (Spring)</td>
            </tr>
        </tbody>
    </table>

    <h2>Where to Start?</h2>
    
    <p>Getting started with web development is easier than ever before. There are countless online tutorials, courses, and documentation to help you along the way. Popular platforms like <a href="https://www.freecodecamp.org" target="_blank">FreeCodeCamp</a> and <a href="https://www.codecademy.com" target="_blank">Codecademy</a> provide excellent resources for beginners.</p>
    
    <p>Remember, the key to becoming a great web developer is practice. Start building projects, learn from your mistakes, and keep improving your skills.</p>

    <p><em>Good luck on your web development journey!</em></p>
`;

export const TypexEditor = forwardRef<HTMLDivElement>(function Editor(_, ref) {
  return (
    <div ref={ref} className="x-flex x-flex-col x-border x-rounded">
      <TypexProvider
        locale="en"
        editorProps={{
          attributes: {
            class: "focus:x-outline-none",
          },
        }}
        extensions={[...defaultExtentions]}
        content={content}
      >
        <Toolbar />
        <EditorContent />
        <BubbleMenu />
        <TableBubbleMenu />
      </TypexProvider>
    </div>
  );
});
