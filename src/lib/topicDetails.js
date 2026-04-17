const emptyTopicDetail = {
  answer: '',
  code: '',
  language: 'javascript',
  readMore: false,
}

export function slugifyTopic(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function buildTopicPath(tag, slug) {
  return `/topic/${tag}/${slug}`
}

const fundamentalTopicDetails = {
  laravel: {
    'MVC Architecture': {
      answer: `MVC stands for Model, View, and Controller. In Laravel, the model is responsible for data and business rules, the view is responsible for HTML output, and the controller sits in the middle to coordinate the request. This separation keeps your code easier to read because database logic, UI markup, and request handling do not all live in one file.

In a practical Laravel app, a request usually hits a route first, then a controller method, then the controller talks to a model and returns a view or JSON response. Once you understand this flow, many Laravel features start to feel connected because routing, validation, Eloquent, and Blade all plug into the same request lifecycle.`,
      code: `Route::get('/posts', [PostController::class, 'index']);

class PostController extends Controller {
    public function index() {
        $posts = Post::latest()->get();
        return view('posts.index', compact('posts'));
    }
}`,
      language: 'php',
      readMore: true,
    },
    'Routing Basics': {
      answer: `Routing is how Laravel decides which code should run for a given URL and HTTP method. The framework lets you define routes in files such as web.php and api.php, then point each route to a closure or controller action. This makes the entry point of your application explicit and easy to scan.

Laravel routes can accept parameters, use names, and group shared behavior like middleware or prefixes. Named routes are especially helpful because you can generate URLs by name instead of hardcoding strings, which makes refactors much safer.`,
      code: `Route::get('/users/{id}', [UserController::class, 'show'])
    ->name('users.show');

public function show(string $id) {
    return User::findOrFail($id);
}`,
      language: 'php',
      readMore: true,
    },
    Middleware: {
      answer: `Middleware is a layer that runs before or after a request reaches your controller. It is commonly used for authentication, logging, rate limiting, checking roles, or transforming a request. Instead of repeating these checks inside every controller method, you can centralize them in middleware.

Laravel ships with common middleware already, and you can also write your own custom classes. A custom middleware receives the request, decides whether the request should continue, and can stop the request early with a redirect or response if something is not allowed.`,
      code: `public function handle(Request $request, Closure $next): Response
{
    if (!$request->user()) {
        return redirect('/login');
    }

    return $next($request);
}`,
      language: 'php',
      readMore: true,
    },
    'Service Container': {
      answer: `The service container is Laravel's dependency injection system. It knows how to create classes and resolve their dependencies, so instead of manually new-ing everything yourself, you ask Laravel for the object you need. That reduces coupling and makes your classes easier to test.

In real projects, the container is most useful when a class depends on an interface or reusable service. Laravel can bind that interface to a concrete implementation, then automatically inject it into controllers, jobs, commands, or other services when needed.`,
      code: `app()->bind(PaymentGateway::class, StripeGateway::class);

class CheckoutController extends Controller {
    public function __construct(private PaymentGateway $gateway) {}

    public function store() {
        return $this->gateway->charge();
    }
}`,
      language: 'php',
      readMore: true,
    },
    'Service Providers': {
      answer: `Service providers are the main place where Laravel boots your application services. They tell Laravel what to register in the container and what setup work should run when the application starts. If the service container is the box of tools, service providers are where you place the tools into the box.

You usually use register() for bindings and boot() for actions that need the framework to be ready, such as view composers, custom validation rules, or event listeners. Keeping this setup in providers keeps configuration predictable instead of scattering boot logic across random files.`,
      code: `class AppServiceProvider extends ServiceProvider {
    public function register(): void {
        $this->app->bind(ReportService::class, CachedReportService::class);
    }

    public function boot(): void {
        View::share('appName', config('app.name'));
    }
}`,
      language: 'php',
      readMore: true,
    },
    Facades: {
      answer: `A facade is Laravel's static-looking shortcut to an underlying service in the container. When you call Cache::get() or Log::info(), you are not using a plain static method in the traditional sense. Laravel resolves the real service behind the facade for you.

Facades are convenient and readable, especially for framework services. The trade-off is that constructor injection is often easier to test and makes dependencies more explicit, so many teams use facades for small framework interactions and injection for core application services.`,
      code: `use Illuminate\\Support\\Facades\\Cache;

$posts = Cache::remember('home.posts', 60, function () {
    return Post::latest()->take(5)->get();
});

Log::info('Homepage posts loaded');`,
      language: 'php',
      readMore: true,
    },
    'Blade Templating': {
      answer: `Blade is Laravel's templating engine for building server-rendered views. It lets you write HTML with simple directives for loops, conditionals, layouts, and reusable components. The syntax stays close to plain HTML, which helps templates stay understandable even for beginners.

One of Blade's biggest strengths is layout composition. You can create a base layout, define sections, and reuse components so pages remain consistent. Blade also escapes output by default, which helps prevent accidental XSS when rendering user data.`,
      code: `<!-- resources/views/posts/index.blade.php -->
@extends('layouts.app')

@section('content')
  @foreach ($posts as $post)
    <h2>{{ $post->title }}</h2>
  @endforeach
@endsection`,
      language: 'php',
      readMore: true,
    },
    'Eloquent ORM': {
      answer: `Eloquent is Laravel's ORM, which means it lets you work with database rows as PHP objects instead of writing raw SQL for everything. A model represents a table, and each instance usually represents one row. This makes common CRUD operations feel expressive and consistent across the app.

Eloquent also gives you relationships, scopes, casting, timestamps, and query building in the same API. It is important to remember that Eloquent is still generating SQL underneath, so understanding how queries behave helps you avoid performance problems such as N+1 queries.`,
      code: `class Post extends Model {
    protected $fillable = ['title', 'body'];
}

$post = Post::create(['title' => 'Intro', 'body' => 'Laravel ORM']);
$latest = Post::latest()->first();`,
      language: 'php',
      readMore: true,
    },
    Migrations: {
      answer: `Migrations are version-controlled files that describe database structure changes. Instead of manually editing tables in phpMyAdmin or a GUI, you write PHP that creates or modifies tables. That means your whole team can keep the schema in sync through code.

Each migration has an up() method to apply the change and a down() method to roll it back. Because migrations are ordered and stored in the repository, they make local setup, CI environments, and deployments much more reliable.`,
      code: `return new class extends Migration {
    public function up(): void {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->timestamps();
        });
    }
};`,
      language: 'php',
      readMore: true,
    },
    'Seeders & Factories': {
      answer: `Factories generate fake model data, and seeders decide how and when to insert that data into the database. Together they make development and testing much easier because you can populate realistic records without typing them by hand.

Factories are especially useful in tests, because you can quickly create one user, fifty posts, or a whole relationship tree in a readable way. Seeders are more commonly used for base setup, such as roles, admin accounts, or sample demo content.`,
      code: `User::factory()->count(10)->create();

class DatabaseSeeder extends Seeder {
    public function run(): void {
        User::factory()->create(['email' => 'admin@example.com']);
        Post::factory()->count(20)->create();
    }
}`,
      language: 'php',
      readMore: true,
    },
  },
  node: {
    'Event Loop': {
      answer: `The event loop is the mechanism that lets Node.js handle many asynchronous operations without creating a separate thread for every request. JavaScript runs on a single main thread, but Node can offload timers, file I/O, and network work to the system, then place callbacks back into queues when they are ready.

It helps to think of the event loop as an orchestrator that keeps checking whether the call stack is empty and whether queued work can now run. Microtasks such as resolved Promises run before timer callbacks, which is why the order of async output can sometimes surprise beginners.`,
      code: `console.log('start');
setTimeout(() => console.log('timer'), 0);
Promise.resolve().then(() => console.log('promise'));
console.log('end');`,
      language: 'javascript',
      readMore: true,
    },
    'Non-blocking I/O': {
      answer: `Non-blocking I/O means Node.js can start an input or output operation and continue doing other work instead of waiting for that operation to finish. This is one of the main reasons Node performs well for APIs, chat apps, and other network-heavy services where the bottleneck is often waiting on files, databases, or remote services.

If you use synchronous APIs like readFileSync in request handlers, you block the event loop and every other request has to wait. Using async APIs keeps the server responsive because work can continue while the operating system handles the slow part in the background.`,
      code: `import { readFile } from 'node:fs/promises';

async function loadConfig() {
  const json = await readFile('./config.json', 'utf8');
  return JSON.parse(json);
}

loadConfig().then(console.log);`,
      language: 'javascript',
      readMore: true,
    },
    'Modules (CommonJS & ESM)': {
      answer: `Modules are how you split code into reusable files. CommonJS is the older Node.js module system and uses require plus module.exports. ESM is the newer JavaScript standard and uses import plus export. Modern Node supports both, but the syntax and loading behavior differ.

The important idea is that modules give each file its own scope and allow you to organize features into smaller units. In new projects, ESM is usually the cleaner choice because it matches browser tooling and modern JavaScript, but you still need to recognize CommonJS in existing codebases.`,
      code: `// math.js
export function sum(a, b) {
  return a + b;
}

// app.js
import { sum } from './math.js';
console.log(sum(2, 3));`,
      language: 'javascript',
      readMore: true,
    },
    'Buffer & Streams': {
      answer: `A Buffer is Node's raw binary data type, and streams are interfaces for processing data gradually instead of loading everything into memory at once. Streams are especially useful for large files, HTTP bodies, and real-time data because they let you handle chunks as they arrive.

Readable streams produce data, writable streams consume data, and transform streams can modify data in between. When you pipe streams together, Node handles chunk flow efficiently, which is usually far better than reading a huge file into one big string or buffer.`,
      code: `import { createReadStream } from 'node:fs';

const stream = createReadStream('./large.log', { encoding: 'utf8' });
stream.on('data', (chunk) => console.log('chunk size:', chunk.length));
stream.on('end', () => console.log('done'));`,
      language: 'javascript',
      readMore: true,
    },
    'File System (fs module)': {
      answer: `The fs module lets Node.js interact with files and directories. You can read files, write files, create folders, watch changes, and stream file contents. For everyday application code, the promise-based API from node:fs/promises is usually the most readable choice.

The main thing to watch for is using the asynchronous methods in servers and tools that handle user requests. Async file system calls keep the event loop free while the operating system performs the disk work.`,
      code: `import { readFile, writeFile } from 'node:fs/promises';

const text = await readFile('./notes.txt', 'utf8');
const updated = \`\${text}\nReviewed at \${new Date().toISOString()}\`;
await writeFile('./notes.txt', updated);`,
      language: 'javascript',
      readMore: true,
    },
    'HTTP Module': {
      answer: `Node's built-in HTTP module lets you create web servers without a framework. It gives you low-level access to the request and response objects, which makes it useful for understanding what Express and other frameworks are abstracting away.

Although most production apps use a framework, learning the core HTTP module teaches important fundamentals such as methods, headers, status codes, and how request data actually flows through the server.`,
      code: `import http from 'node:http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ path: req.url, method: req.method }));
});

server.listen(3000);`,
      language: 'javascript',
      readMore: true,
    },
    'Path & OS Modules': {
      answer: `The path module helps you work with file paths in a cross-platform way, and the os module gives you basic information about the current operating system. These modules are useful in scripts, build tools, CLIs, and server code that needs to behave correctly on Windows, Linux, and macOS.

You should avoid building paths by hand with string concatenation because slash styles vary between operating systems. Using path.join or path.resolve makes your code safer and more portable.`,
      code: `import path from 'node:path';
import os from 'node:os';

const filePath = path.join(process.cwd(), 'logs', 'app.log');
console.log(filePath);
console.log(os.platform(), os.cpus().length);`,
      language: 'javascript',
      readMore: true,
    },
    'Process & Env': {
      answer: `The global process object gives Node.js programs information about the running process. It exposes environment variables, command-line arguments, the current working directory, exit codes, and lifecycle events such as signals. This is essential for scripts, CLIs, and configurable servers.

Environment variables are especially important because they let you keep secrets and environment-specific settings outside the source code. Instead of hardcoding ports, API keys, or database URLs, you read them from process.env.`,
      code: `const port = process.env.PORT || 3000;
const mode = process.env.NODE_ENV || 'development';

console.log({ port, mode, args: process.argv.slice(2) });
process.on('SIGINT', () => console.log('Shutting down gracefully'));`,
      language: 'javascript',
      readMore: true,
    },
    EventEmitter: {
      answer: `EventEmitter is Node's built-in pattern for pub/sub style communication inside an application. One part of your program can emit an event, and other parts can listen for it. This is a clean way to decouple actions from reactions, especially in tools, background jobs, or internal application flows.

It is important to name events clearly and avoid turning events into hidden control flow. Used well, EventEmitter can keep modules independent. Used carelessly, it can make execution order harder to trace.`,
      code: `import { EventEmitter } from 'node:events';

const bus = new EventEmitter();
bus.on('user:created', (user) => console.log('Send email to', user.email));
bus.emit('user:created', { email: 'rimon@example.com' });`,
      language: 'javascript',
      readMore: true,
    },
    'Child Processes': {
      answer: `Child processes let Node.js start and communicate with other system processes. This is useful when you need to run shell commands, use non-JavaScript tools, or isolate work from the main Node process. Node provides spawn, exec, and fork for slightly different use cases.

spawn is good for streaming output from long-running commands, exec is simpler for short commands when you want the whole output at once, and fork is specialized for running another Node script with an IPC channel.`,
      code: `import { spawn } from 'node:child_process';

const child = spawn('node', ['-v']);
child.stdout.on('data', (data) => console.log(data.toString().trim()));
child.on('close', (code) => console.log('exit code:', code));`,
      language: 'javascript',
      readMore: true,
    },
  },
  next: {
    'Pages vs App Router': {
      answer: `Next.js currently supports two routing systems: the older Pages Router and the newer App Router. The Pages Router is built around files inside the pages directory and patterns like getServerSideProps. The App Router is built around the app directory and introduces nested layouts, server components, route handlers, and newer rendering patterns.

In interviews and real projects, the key is understanding that both exist, but most modern Next.js work is moving toward the App Router. You should be able to explain which features belong to which model, because teams often maintain older pages-based code while building new features in app-based code.`,
      code: `// Pages Router
// pages/about.jsx
export default function About() {
  return <h1>About page</h1>;
}

// App Router
// app/about/page.jsx`,
      language: 'javascript',
      readMore: true,
    },
    'File-based Routing': {
      answer: `File-based routing means the folder and file structure decides the URL structure. In Next.js, creating a page file automatically creates a route, and special file naming lets you handle dynamic segments such as /posts/123 or catch-all patterns such as nested documentation paths.

This approach removes a lot of router boilerplate and makes the URL map visible directly in the filesystem. When you read a Next.js codebase, the routes are often easier to discover because the directory structure is the route structure.`,
      code: `// app/posts/[id]/page.jsx
export default async function PostPage({ params }) {
  const { id } = await params;
  return <h1>Post {id}</h1>;
}

// app/docs/[...slug]/page.jsx`,
      language: 'javascript',
      readMore: true,
    },
    'Server Components': {
      answer: `Server Components are React components that run on the server instead of in the browser. In the Next.js App Router, components are server components by default. They can fetch data directly, keep secrets on the server, and avoid sending unnecessary JavaScript to the client.

The trade-off is that server components cannot use browser-only hooks like useState or useEffect. They are best for data fetching and rendering static or server-derived UI, while interactive parts should be moved into client components.`,
      code: `export default async function ProductsPage() {
  const res = await fetch('https://api.example.com/products', {
    cache: 'no-store',
  });
  const products = await res.json();
  return <pre>{JSON.stringify(products.slice(0, 2), null, 2)}</pre>;
}`,
      language: 'javascript',
      readMore: true,
    },
    "Client Components ('use client')": {
      answer: `A client component is a component that needs browser-side interactivity, such as state, effects, event handlers, or direct DOM access. In the App Router, you mark it with 'use client' at the top of the file. That tells Next.js the component should be bundled for the browser.

Client components are not bad, but they should be used intentionally. A common pattern is to keep the page or layout as a server component, then nest a small client component inside it for interactive behavior like filters, tabs, or form state.`,
      code: `'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`,
      language: 'javascript',
      readMore: true,
    },
    'SSR (getServerSideProps)': {
      answer: `Server-side rendering in the Pages Router means Next.js renders the page on every request. The getServerSideProps function runs on the server, fetches the data, and passes it into the page component as props. This is useful when data must always be fresh or depends on the request itself.

Because SSR runs per request, it can be slower and more expensive than static generation for highly cacheable pages. The right choice depends on freshness requirements, personalization, and how often the content changes.`,
      code: `export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/dashboard');
  const dashboard = await res.json();
  return { props: { dashboard } };
}

export default function DashboardPage({ dashboard }) {}`,
      language: 'javascript',
      readMore: true,
    },
    'SSG (getStaticProps)': {
      answer: `Static site generation means Next.js renders the page at build time and serves the prebuilt HTML later. In the Pages Router, getStaticProps is the API for that. This is great for content that changes infrequently, because the site becomes fast to serve and easy to cache.

The main limitation is that the data is fixed until you rebuild or revalidate. That is why static generation is often used for marketing pages, docs, blog posts, and other content where perfect real-time freshness is not required.`,
      code: `export async function getStaticProps() {
  const res = await fetch('https://api.example.com/docs');
  const docs = await res.json();
  return { props: { docs } };
}

export default function DocsPage({ docs }) {}`,
      language: 'javascript',
      readMore: true,
    },
    'ISR (Incremental Static Regen)': {
      answer: `Incremental Static Regeneration combines the speed of static pages with periodic background updates. A page is first generated statically, then Next.js can regenerate it after a configured interval. Users keep getting fast responses, but the content does not stay stale forever.

ISR is a strong fit for product pages, news pages, or CMS content that changes sometimes but not on every request. It reduces server load compared with SSR while still giving you fresher content than a pure build-time page.`,
      code: `export async function getStaticProps() {
  const res = await fetch('https://api.example.com/products');
  const products = await res.json();
  return { props: { products }, revalidate: 60 };
}

export default function ProductsPage({ products }) {}`,
      language: 'javascript',
      readMore: true,
    },
    'Layouts & Templates': {
      answer: `Layouts in the App Router let you share UI across related routes, such as a dashboard shell, sidebar, or persistent navigation. Because layouts wrap child routes, they are ideal for UI that should remain stable while only the inner page content changes.

Templates are similar but re-render on navigation, which makes them useful when you want a fresh instance each time. Understanding the difference helps you control state persistence and loading behavior across nested routes.`,
      code: `// app/dashboard/layout.jsx
export default function DashboardLayout({ children }) {
  return (
    <section>
      <nav>Dashboard</nav>
      {children}
    </section>
  );
}`,
      language: 'javascript',
      readMore: true,
    },
    'Loading & Error UI': {
      answer: `Next.js App Router lets you colocate loading and error boundaries with routes. A loading file can show instant feedback while server components stream in, and an error file can catch rendering failures for that route segment instead of crashing the whole app.

This is powerful because it keeps route states local. A slow child route can show its own skeleton while the rest of the page stays visible, and a broken segment can render recovery UI without taking down unrelated parts of the interface.`,
      code: `// app/products/loading.jsx
export default function Loading() {
  return <p>Loading products...</p>;
}

// app/products/error.jsx
'use client';`,
      language: 'javascript',
      readMore: true,
    },
    'Route Groups': {
      answer: `Route groups let you organize files in the App Router without affecting the final URL. You wrap a folder name in parentheses, and Next.js treats it as a grouping tool for layouts, templates, or project organization rather than a path segment.

This is useful when you want two areas of the app to share different layouts or loading behavior but still keep clean URLs. It is a structural feature more than a user-facing one, which makes it very helpful in larger codebases.`,
      code: `app/
  (marketing)/
    about/page.jsx
  (dashboard)/
    settings/page.jsx

// URLs stay /about and /settings`,
      language: 'javascript',
      readMore: true,
    },
  },
  react: {
    JSX: {
      answer: `JSX is the syntax React uses to describe UI with a JavaScript-like template format. It looks similar to HTML, but under the hood it becomes JavaScript function calls that create React elements. This lets you mix markup with variables, conditions, and expressions in one readable place.

The key rule is that JSX is still JavaScript. You can embed values with curly braces, pass props, map arrays into elements, and compose components. Once you understand that JSX is just syntax over JavaScript, many React patterns become much easier to reason about.`,
      code: `function Welcome({ name }) {
  const isAdmin = name === 'Rimon';
  return <h1>{isAdmin ? \`Welcome back, \${name}\` : 'Welcome guest'}</h1>;
}

export default Welcome;`,
      language: 'javascript',
      readMore: true,
    },
    'Components (Functional)': {
      answer: `A functional component is a JavaScript function that receives props and returns JSX. In modern React, functional components are the standard way to build UI because they work naturally with hooks and are usually simpler to read than class components.

Good components stay focused on one responsibility. A small reusable component can receive props from a parent, render UI based on those props, and stay easy to test. This compositional style is one of the biggest strengths of React.`,
      code: `function UserCard({ user }) {
  return (
    <article>
      <h2>{user.name}</h2>
      <p>{user.role}</p>
    </article>
  );
}`,
      language: 'javascript',
      readMore: true,
    },
    'Props & PropTypes': {
      answer: `Props are the inputs to a React component. They let parent components pass data and configuration down to child components. This one-way data flow makes React applications easier to reason about because the direction of data is predictable.

PropTypes are a runtime validation tool that can help catch wrong prop shapes during development. Many modern teams use TypeScript instead, but the core idea is the same: document what a component expects so misuse is easier to catch.`,
      code: `function Badge({ label, tone = 'info' }) {
  return <span className={\`badge badge-\${tone}\`}>{label}</span>;
}

<Badge label="Active" tone="success" />
<Badge label="Draft" />`,
      language: 'javascript',
      readMore: true,
    },
    'State (useState)': {
      answer: `State is data that belongs to a component and can change over time. The useState hook gives a component memory so it can respond to user actions or async updates. When state changes, React re-renders the component to reflect the new UI.

The important habit is to treat state as immutable. Instead of editing arrays or objects in place, create new ones. That makes updates predictable and allows React to detect changes correctly.`,
      code: `import { useState } from 'react';

function TodoInput() {
  const [text, setText] = useState('');
  return <input value={text} onChange={(e) => setText(e.target.value)} />;
}`,
      language: 'javascript',
      readMore: true,
    },
    useEffect: {
      answer: `useEffect lets a component run side effects after rendering. Side effects are things like fetching data, subscribing to events, updating the document title, or setting timers. React keeps rendering pure, then runs effects after the DOM update has happened.

The dependency array controls when the effect should re-run. It is important to include the values the effect uses, and to return a cleanup function when you subscribe to something or create a timer. That prevents leaks and stale behavior.`,
      code: `import { useEffect, useState } from 'react';

useEffect(() => {
  const id = setInterval(() => setTick((value) => value + 1), 1000);
  return () => clearInterval(id);
}, []);`,
      language: 'javascript',
      readMore: true,
    },
    useRef: {
      answer: `useRef gives you a mutable container whose value persists across renders without causing a re-render when it changes. One common use is holding a reference to a DOM element, but refs are also useful for timers, previous values, or integration with non-React libraries.

You should reach for useRef when you need persistence without UI updates. If changing the value should update what the user sees, state is usually the better choice.`,
      code: `import { useEffect, useRef } from 'react';

function SearchBox() {
  const inputRef = useRef(null);
  useEffect(() => inputRef.current?.focus(), []);
  return <input ref={inputRef} placeholder="Search topics" />;
}`,
      language: 'javascript',
      readMore: true,
    },
    useContext: {
      answer: `useContext lets components read shared values from a React context without manually passing props through many levels. It is useful for app-wide concerns like themes, auth state, locale, or modal state, especially when many components need access to the same value.

Context is best for shared state that is reasonably stable and widely needed. It should not replace all local state. Overusing context can make updates harder to trace, so it works best when you define a clear scope and responsibility for each provider.`,
      code: `import { createContext, useContext } from 'react';

const ThemeContext = createContext('dark');

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div className={theme}>Toolbar</div>;
}`,
      language: 'javascript',
      readMore: true,
    },
    useReducer: {
      answer: `useReducer is a state hook for situations where updates are more complex than simply setting one value. Instead of directly changing state, you dispatch actions and a reducer function decides the next state. This makes transitions easier to organize when several actions affect the same data structure.

It is especially helpful for forms, filters, wizards, or local state that has multiple related fields. The reducer pattern also encourages you to model state changes explicitly, which tends to improve readability as the component grows.`,
      code: `function reducer(state, action) {
  if (action.type === 'increment') return { count: state.count + 1 };
  return state;
}

const [state, dispatch] = useReducer(reducer, { count: 0 });`,
      language: 'javascript',
      readMore: true,
    },
    'useMemo & useCallback': {
      answer: `useMemo memoizes a computed value, and useCallback memoizes a function reference. They are performance tools, not default habits. You use them when a calculation is expensive or when child components depend on stable references to avoid unnecessary re-renders.

Many beginners overuse them. If the code is already simple and fast, adding memoization can make components harder to read for little benefit. The best workflow is to measure first, then optimize the parts that are actually causing work.`,
      code: `const filteredTopics = useMemo(() => {
  return topics.filter((topic) => topic.name.toLowerCase().includes(query));
}, [topics, query]);

const handleSelect = useCallback((id) => setSelectedId(id), []);`,
      language: 'javascript',
      readMore: true,
    },
    'Custom Hooks': {
      answer: `A custom hook is a function that starts with use and contains reusable hook-based logic. It does not create shared state automatically, but it lets you extract repeated behavior into a clean abstraction. This keeps components smaller and easier to understand.

Custom hooks are ideal when multiple components need the same effect, async flow, or event wiring. They let you package behavior around React's built-in hooks while still following the same rules of hooks as any other component.`,
      code: `import { useEffect, useState } from 'react';

function useOnlineStatus() {
  const [online, setOnline] = useState(navigator.onLine);
  useEffect(() => window.addEventListener('online', () => setOnline(true)), []);
  return online;
}`,
      language: 'javascript',
      readMore: true,
    },
  },
  general: {
    'HTTP/HTTPS & Status Codes': {
      answer: `HTTP is the protocol browsers and clients use to communicate with servers. It defines requests, responses, headers, methods, and status codes. HTTPS is simply HTTP over TLS, which adds encryption and identity verification so traffic is protected in transit.

Status codes describe the result of a request. A 2xx status means success, 3xx means redirect, 4xx means a client-side issue, and 5xx means a server-side failure. Understanding these basics is essential for backend work, debugging APIs, and discussing system behavior in interviews.`,
      code: `fetch('/api/topics')
  .then(async (res) => {
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    return res.json();
  })
  .then(console.log)
  .catch(console.error);`,
      language: 'javascript',
      readMore: true,
    },
    'REST vs GraphQL vs gRPC': {
      answer: `REST, GraphQL, and gRPC are different ways to design service communication. REST exposes resources through URLs and HTTP methods, GraphQL lets the client ask for exactly the fields it needs through one schema-driven endpoint, and gRPC focuses on efficient binary communication using strongly typed contracts.

There is no single winner for every system. REST is simple and familiar, GraphQL is powerful for flexible client data needs, and gRPC is excellent for internal service-to-service communication where performance and contracts matter. A strong answer explains trade-offs instead of treating one style as universally best.`,
      code: `const restUsers = await fetch('/api/users').then((res) => res.json());

const graphQlUsers = await fetch('/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: '{ users { id name } }' }),
}).then((res) => res.json());`,
      language: 'javascript',
      readMore: true,
    },
    'SQL Fundamentals': {
      answer: `SQL is the language used to work with relational databases. At a beginner level, you should understand how to select rows, filter with WHERE, combine tables with JOIN, group data, and sort results. These operations are the foundation of almost every database-backed application.

Even if you use an ORM, SQL fundamentals still matter because the ORM is generating queries on your behalf. Developers who understand SQL can debug performance issues, design better schemas, and avoid accidental slow queries much more effectively.`,
      code: `const userId = 7;
const query = [
  'SELECT p.title, u.name',
  'FROM posts p',
  'JOIN users u ON u.id = p.user_id',
  'WHERE u.id = ?',
].join(' ');
console.log(query, [userId]);`,
      language: 'javascript',
      readMore: true,
    },
    'NoSQL Concepts': {
      answer: `NoSQL databases are database systems that do not follow the classic relational table model in the same way SQL databases do. Common types include document stores, key-value stores, wide-column databases, and graph databases. They are often chosen for flexible schemas, horizontal scaling, or specialized access patterns.

This does not mean NoSQL replaces SQL. In practice, teams choose based on the problem. Document databases are great for rapidly evolving JSON-like data, while relational systems are often better for strong consistency and complex joins.`,
      code: `const userDoc = {
  _id: 'u_42',
  name: 'Rimon',
  skills: ['React', 'Node.js'],
  preferences: { theme: 'dark' },
};

console.log(JSON.stringify(userDoc, null, 2));`,
      language: 'javascript',
      readMore: true,
    },
    'Database Indexing': {
      answer: `An index is a data structure that helps the database find rows faster without scanning the whole table. The trade-off is that indexes take extra storage and slightly slow down writes because the database has to keep them updated.

Indexing matters most on columns you search, sort, or join on frequently. A good interview answer also mentions that adding every possible index is not good design. You want targeted indexes based on real query patterns.`,
      code: `const query = {
  sql: 'SELECT * FROM orders WHERE customer_id = ? ORDER BY created_at DESC',
  suggestedIndex: '(customer_id, created_at)',
};

console.log(query);`,
      language: 'javascript',
      readMore: true,
    },
    'ACID Transactions': {
      answer: `ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties describe the guarantees a transactional database provides when multiple operations must behave as one unit. They are important when a failure in the middle of a workflow would leave data in an invalid state.

The classic example is moving money between accounts. If one update succeeds and the other fails, the system becomes inconsistent. A transaction ensures the full set of changes either all commit together or all roll back together.`,
      code: `async function transfer(db, fromId, toId, amount) {
  await db.beginTransaction();
  await db.query('UPDATE accounts SET balance = balance - ? WHERE id = ?', [amount, fromId]);
  await db.query('UPDATE accounts SET balance = balance + ? WHERE id = ?', [amount, toId]);
  await db.commit();
}`,
      language: 'javascript',
      readMore: true,
    },
    'Git & GitHub': {
      answer: `Git is a version control system, and GitHub is a platform built around hosting Git repositories and collaboration workflows. Git tracks file changes over time, while GitHub adds pull requests, code review, issues, and CI integrations. Together they form the backbone of modern team development.

A solid beginner understanding includes commits, branches, merging, rebasing at a high level, and the pull request workflow. In practice, Git is less about memorizing commands and more about understanding how changes move from local work to shared history safely.`,
      code: `git checkout -b feature/topic-detail
git add src/components/TopicCard.jsx
git commit -m "Add topic detail navigation"
git push origin feature/topic-detail`,
      language: 'bash',
      readMore: true,
    },
    'Docker Basics': {
      answer: `Docker packages an application and its dependencies into a container image so it runs consistently across environments. Instead of saying "it works on my machine," you define the runtime in a Dockerfile and share that setup with other developers, CI, or production systems.

Containers are lightweight compared with full virtual machines because they share the host kernel. For web applications, Docker is commonly used to package the app, database, queue, or worker services into reproducible development and deployment environments.`,
      code: `FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
CMD ["npm", "run", "dev"]`,
      language: 'bash',
      readMore: true,
    },
    'CI/CD Concepts': {
      answer: `CI means continuously integrating code changes through automated checks like tests and linting. CD means continuously delivering or deploying those validated changes toward staging or production. The core idea is to make software delivery repeatable, fast, and safe.

In real projects, a pipeline might install dependencies, run linting, run tests, build the application, and deploy if everything passes. This reduces manual mistakes and gives the team fast feedback whenever code is pushed.`,
      code: `name: ci
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - run: npm test`,
      language: 'bash',
      readMore: true,
    },
    'Linux CLI Essentials': {
      answer: `Linux command-line basics matter because many servers, containers, and CI systems run in Linux environments. Commands like ls, cd, grep, cat, chmod, top, and ps help you inspect files, manage permissions, search logs, and diagnose running processes.

You do not need to memorize every flag, but you should be comfortable reading files, locating text, checking processes, and understanding file permissions. These skills save time when debugging production issues or working on remote machines.`,
      code: `ls -la
grep -n "ERROR" ./logs/app.log
chmod +x deploy.sh
ps aux | grep node`,
      language: 'bash',
      readMore: true,
    },
    'DNS & Domain Routing': {
      answer: `DNS translates human-readable domain names into IP addresses. When someone visits a domain, the client or resolver looks up records such as A, AAAA, or CNAME to find out where traffic should go. Without DNS, users would need to remember raw server addresses.

For developers, the key ideas are what common record types do, how TTL affects propagation, and how DNS works together with load balancers, CDNs, and reverse proxies. Many deployment issues come down to DNS configuration or caching behavior.`,
      code: `const dnsRecord = {
  type: 'A',
  host: 'api.example.com',
  value: '203.0.113.10',
  ttl: 300,
};

console.log(dnsRecord);`,
      language: 'javascript',
      readMore: true,
    },
    'JWT vs Session Auth': {
      answer: `Session-based authentication stores the login state on the server, usually keyed by a session ID stored in a cookie. JWT authentication stores signed user claims in a token that the client sends on each request. Both approaches work, but they behave differently operationally.

Sessions are easier to revoke centrally because the server owns the state. JWTs are more portable and fit distributed systems well, but token rotation, expiration, and revocation need careful design. A professional answer explains the trade-offs instead of framing JWT as automatically better.`,
      code: `const jwtPayload = { sub: 'user_42', role: 'admin', exp: 1735689600 };

const sessionShape = {
  sessionId: 'sess_abc123',
  storedServerSide: true,
  cookieHttpOnly: true,
};

console.log(jwtPayload, sessionShape);`,
      language: 'javascript',
      readMore: true,
    },
    'OAuth 2.0 & OpenID Connect': {
      answer: `OAuth 2.0 is an authorization framework that lets an application access resources on behalf of a user without handling the user's password directly. OpenID Connect builds on OAuth 2.0 to add authentication and identity information, usually through ID tokens and user info endpoints.

In everyday product work, you see this in "Sign in with Google" or similar flows. The big distinction is that OAuth is about delegated access, while OpenID Connect is about login and identity. Mixing those concepts up is a common interview mistake.`,
      code: `const authRequest = new URLSearchParams({
  response_type: 'code',
  client_id: 'client_123',
  redirect_uri: 'https://app.example.com/callback',
  scope: 'openid profile email',
});

console.log(\`/authorize?\${authRequest.toString()}\`);`,
      language: 'javascript',
      readMore: true,
    },
    'API Security Basics': {
      answer: `API security starts with a few common principles: validate input, authenticate users, authorize actions, limit sensitive data exposure, and protect against common attacks such as injection, XSS, CSRF, and brute force attempts. Security is rarely one feature; it is a set of habits layered across the stack.

Good API design also includes rate limiting, safe error messages, secure cookies or tokens, HTTPS everywhere, and proper logging. In interviews, it helps to explain both prevention and impact reduction rather than naming attacks without the matching mitigations.`,
      code: `function validateTopicInput(body) {
  if (typeof body.name !== 'string' || body.name.length > 120) {
    throw new Error('Invalid topic payload');
  }
  return { name: body.name.trim() };
}`,
      language: 'javascript',
      readMore: true,
    },
    'Caching Strategies': {
      answer: `Caching stores previously computed or fetched data so future requests can be served faster. Common strategies include cache-aside, write-through, write-back, and TTL-based expiration. The right approach depends on how often data changes and how stale it is allowed to become.

Caching improves performance, but it introduces a new problem: keeping cached data valid. That is why many production bugs around caching are really invalidation problems, not storage problems.`,
      code: `const cache = new Map();

async function getUser(id, fetchUser) {
  if (cache.has(id)) return cache.get(id);
  const user = await fetchUser(id);
  cache.set(id, user);
  return user;
}`,
      language: 'javascript',
      readMore: true,
    },
    'Pub/Sub & Message Queues': {
      answer: `Pub/sub and message queues help systems communicate asynchronously. Instead of one service directly waiting for another to finish, a producer can publish an event or push a message, and one or more consumers process it later. This reduces coupling and smooths load spikes.

Queues are great for background jobs like sending emails, generating reports, or processing uploads. Pub/sub is often used when multiple systems should react to the same event, such as order creation, analytics tracking, and notification delivery.`,
      code: `const queueMessage = {
  type: 'email.welcome',
  payload: { userId: 'u_42', email: 'rimon@example.com' },
};

console.log('Queued job:', queueMessage);`,
      language: 'javascript',
      readMore: true,
    },
    'WebSockets vs SSE': {
      answer: `WebSockets provide a full-duplex connection, which means the client and server can both send messages at any time. Server-Sent Events are one-way: the server can push updates to the client, but the client still uses normal HTTP requests to send data back.

If you need chat, multiplayer interactions, or collaborative editing, WebSockets are usually the better fit. If you only need live server updates like notifications, logs, or stock ticks, SSE can be simpler and perfectly sufficient.`,
      code: `const source = new EventSource('/events');

source.onmessage = (event) => {
  const update = JSON.parse(event.data);
  console.log('SSE update:', update);
};`,
      language: 'javascript',
      readMore: true,
    },
    'Load Balancing Basics': {
      answer: `A load balancer sits in front of multiple servers and distributes incoming requests between them. This improves availability and scalability because traffic does not depend on one machine. If one instance fails, the balancer can stop sending traffic to it and keep the service running.

Different strategies exist, such as round-robin, least connections, and sticky sessions. The right choice depends on the application, especially whether requests need to stay tied to server-local state or can be handled statelessly anywhere.`,
      code: `const servers = ['app-1', 'app-2', 'app-3'];
let current = 0;

function nextServer() {
  const target = servers[current % servers.length];
  current += 1;
  return target;
}`,
      language: 'javascript',
      readMore: true,
    },
    'Big O Notation': {
      answer: `Big O notation describes how an algorithm's time or space usage grows as the input size increases. It helps you compare solutions at a high level. For example, O(1) is constant, O(n) grows linearly, and O(n log n) grows faster than linear but better than quadratic.

The point is not to memorize labels in isolation. A better understanding comes from connecting complexity to real code. Loops, nested loops, recursion, and data structure choices all influence how the cost grows as data gets larger.`,
      code: `function containsDuplicate(values) {
  const seen = new Set();
  for (const value of values) {
    if (seen.has(value)) return true;
    seen.add(value);
  }
  return false;
}`,
      language: 'javascript',
      readMore: true,
    },
    'Data Structures': {
      answer: `Data structures are organized ways to store and access data. Arrays are great for ordered lists, hash maps are fast for key lookups, trees represent hierarchy, and graphs represent relationships between connected entities. Picking the right structure often matters as much as picking the algorithm.

In application work, you use these ideas constantly even if the language hides some details. For example, a JavaScript object or Map acts like a hash table, and choosing one over an array lookup can drastically improve performance and code clarity.`,
      code: `const usersById = new Map();
usersById.set('u1', { name: 'Asha' });
usersById.set('u2', { name: 'Rimon' });

console.log(usersById.get('u2'));
console.log([...usersById.keys()]);`,
      language: 'javascript',
      readMore: true,
    },
    'Design Patterns': {
      answer: `Design patterns are common solution templates for recurring software design problems. They are not rules, and they are not always required, but they give developers a shared vocabulary for discussing structure. Examples include Factory, Strategy, Observer, Adapter, and Singleton.

The most useful way to understand patterns is through the problem each one solves. If you memorize names only, they stay abstract. If you connect them to code smells such as too many conditionals or tightly coupled dependencies, patterns become practical tools.`,
      code: `const payments = {
  card: { pay: (amount) => \`Card charge: \${amount}\` },
  bkash: { pay: (amount) => \`bKash charge: \${amount}\` },
};

function checkout(method, amount) {
  return payments[method].pay(amount);
}`,
      language: 'javascript',
      readMore: true,
    },
    'SOLID Principles': {
      answer: `SOLID is a group of object-oriented design principles that encourage code to be easier to extend, test, and maintain. The most important takeaway for beginners is not the acronym itself, but the design mindset behind it: classes and modules should have clear responsibilities and depend on abstractions when possible.

For example, the Single Responsibility Principle asks you not to mix unrelated jobs into one class. Dependency Inversion suggests high-level code should depend on interfaces or contracts rather than concrete low-level details.`,
      code: `class EmailNotifier {
  send(message) {
    console.log('Email:', message);
  }
}

class OrderService {
  constructor(notifier) { this.notifier = notifier; }
}`,
      language: 'javascript',
      readMore: true,
    },
    'Clean Code Practices': {
      answer: `Clean code is code that communicates intent clearly. That usually means meaningful names, small focused functions, low duplication, simple control flow, and comments used only when the code cannot explain itself. Clean code is not about perfection; it is about making future changes safer.

In team environments, clean code matters because most of the cost of software happens after the first version is written. Code that is easy to read is easier to debug, review, extend, and hand off to another developer.`,
      code: `function formatDisplayName(firstName, lastName) {
  return [firstName, lastName]
    .map((part) => part?.trim())
    .filter(Boolean)
    .join(' ');
}`,
      language: 'javascript',
      readMore: true,
    },
    'Testing Types': {
      answer: `Different test types give confidence at different layers. Unit tests focus on a small function or module, integration tests verify multiple pieces working together, and end-to-end tests simulate real user behavior through the full system. Each layer catches different kinds of defects.

Strong teams balance these layers instead of relying on only one. Unit tests are fast and targeted, while end-to-end tests provide realistic coverage but are slower and more brittle. The goal is confidence with reasonable cost.`,
      code: `function sum(a, b) {
  return a + b;
}

console.assert(sum(2, 3) === 5, 'sum should add numbers');
console.assert(sum(-1, 1) === 0, 'sum should handle negatives');`,
      language: 'javascript',
      readMore: true,
    },
    'Agile & Scrum Basics': {
      answer: `Agile is a broad mindset around iterative delivery, feedback, and adapting to change. Scrum is one specific framework under that umbrella, with roles, ceremonies, and time-boxed sprints. Teams use Scrum to plan, build, review, and improve in a repeatable cycle.

For developers, the important part is understanding how work moves through a backlog, how priorities change, and how short feedback loops reduce risk. A good answer also recognizes that process should support delivery rather than become an end in itself.`,
      code: `const sprintBoard = {
  backlog: ['Topic detail page', 'Search filter'],
  inProgress: ['Write fundamental answers'],
  done: ['Dynamic topic counts'],
};

console.log(sprintBoard);`,
      language: 'javascript',
      readMore: true,
    },
    'System Design Intro': {
      answer: `System design is the practice of planning how software should behave under real-world load, failure, and growth. Instead of focusing only on one function or class, it asks bigger questions: where data is stored, how services communicate, how caching works, and how the system scales.

At the beginner level, interviewers usually want to hear that you can reason about trade-offs. For example, you might explain when to add caching, when a single database becomes a bottleneck, or why stateless services are easier to scale horizontally.`,
      code: `const system = {
  client: 'Web app',
  api: 'Node.js service',
  cache: 'Redis',
  db: 'PostgreSQL',
  storage: 'S3',
};

console.log(system);`,
      language: 'javascript',
      readMore: true,
    },
    'Nginx Basics': {
      answer: `Nginx is commonly used as a reverse proxy, static file server, and load balancer. A reverse proxy sits in front of your application and forwards requests to it, which lets Nginx handle TLS termination, caching, compression, or routing before traffic reaches your app server.

This is useful because your application can focus on business logic while Nginx handles web-server concerns efficiently. Many production stacks put Nginx in front of Node, PHP-FPM, or other app runtimes.`,
      code: `server {
  listen 80;
  server_name example.com;

  location / {
    proxy_pass http://127.0.0.1:3000;
  }
}`,
      language: 'bash',
      readMore: true,
    },
    'Cloud Fundamentals (AWS/GCP)': {
      answer: `Cloud platforms provide managed infrastructure and services so teams can provision compute, storage, databases, networking, and serverless functions on demand. Instead of buying hardware up front, you rent what you need and scale usage over time.

You do not need to memorize every vendor product, but you should understand the common building blocks. Virtual machines, object storage, managed databases, queues, and serverless runtimes show up again and again across AWS, GCP, and Azure with different names.`,
      code: `const cloudStack = {
  compute: 'EC2 or Compute Engine',
  objectStorage: 'S3 or Cloud Storage',
  database: 'RDS or Cloud SQL',
  serverless: 'Lambda or Cloud Functions',
};

console.log(cloudStack);`,
      language: 'javascript',
      readMore: true,
    },
    'TypeScript Fundamentals': {
      answer: `TypeScript adds static typing to JavaScript. It helps you describe shapes of data, function parameters, return values, and reusable contracts through interfaces and types. This catches mistakes earlier and improves editor support as codebases grow.

The value of TypeScript is not only stricter code. It also makes intent clearer for teams. When a function says it returns a User or accepts a Topic[], future readers understand the contract without hunting through runtime logic.`,
      code: `type Topic = {
  name: string;
  desc: string;
};

const topics: Topic[] = [{ name: 'JSX', desc: 'React syntax' }];`,
      language: 'typescript',
      readMore: true,
    },
    'Monorepo Tools (Turborepo/NX)': {
      answer: `A monorepo stores multiple related apps and packages in one repository. Tools like Turborepo and Nx help manage tasks, dependency graphs, caching, and coordination between those projects. This is useful when several apps share UI components, utilities, or backend libraries.

The main benefit is consistency and easier sharing, but monorepos also need discipline around ownership, build speed, and boundaries. The tooling helps teams avoid rerunning every task in every package when only one area changed.`,
      code: `{
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "lint": "turbo run lint"
  }
}`,
      language: 'bash',
      readMore: true,
    },
    'Semantic Versioning (semver)': {
      answer: `Semantic versioning is a convention for communicating the impact of releases. In the version number major.minor.patch, patch means backward-compatible fixes, minor means backward-compatible features, and major means breaking changes. This helps teams understand upgrade risk.

Semver also matters in dependency ranges. A package that allows ^1.2.0 can usually accept new minor and patch releases within major version 1, while tighter ranges are safer when you need more predictable upgrades.`,
      code: `const versions = {
  patch: '1.2.4',
  minor: '1.3.0',
  major: '2.0.0',
  range: '^1.2.0',
};

console.log(versions);`,
      language: 'javascript',
      readMore: true,
    },
    'Web Performance (Core Web Vitals)': {
      answer: `Core Web Vitals are user-centered performance metrics that focus on loading speed, responsiveness, and layout stability. Key examples include Largest Contentful Paint for perceived load, Interaction to Next Paint for responsiveness, and Cumulative Layout Shift for visual stability.

These metrics matter because performance is not just about synthetic speed scores. It directly affects user experience, SEO, and conversion. Good engineering decisions like optimized images, smaller bundles, and stable layout dimensions improve these metrics.`,
      code: `const vitals = {
  lcp: 'Measure main content load speed',
  inp: 'Measure interaction responsiveness',
  cls: 'Measure unexpected layout movement',
};

console.log(vitals);`,
      language: 'javascript',
      readMore: true,
    },
    'Browser Dev Tools': {
      answer: `Browser DevTools are essential for debugging front-end behavior. The Elements panel helps inspect and edit DOM and CSS, the Network tab shows requests and response timing, the Console shows runtime errors, and the Performance tools help diagnose rendering or scripting bottlenecks.

Strong front-end developers use DevTools constantly, not only when something breaks badly. It is the fastest way to verify layout, inspect events, check payloads, and understand how the browser sees your application.`,
      code: `console.log('Inspect this value in DevTools:', {
  activeRoute: window.location.pathname,
  viewport: \`\${window.innerWidth}x\${window.innerHeight}\`,
  userAgent: navigator.userAgent,
});`,
      language: 'javascript',
      readMore: true,
    },
    'Regex Fundamentals': {
      answer: `Regular expressions are patterns used to match, validate, or transform text. They are powerful for tasks like checking input formats, extracting tokens, or cleaning strings. At the same time, they can become hard to read if the pattern grows too clever.

The best approach is to learn the common building blocks such as character classes, quantifiers, groups, and anchors. Then use regex where it truly helps, not as a replacement for every parsing problem.`,
      code: `const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

function isValidEmail(value) {
  return emailPattern.test(value);
}

console.log(isValidEmail('rimon@example.com'));`,
      language: 'javascript',
      readMore: true,
    },
    'Soft Skills for Interviews': {
      answer: `Technical interviews are not only about getting the perfect answer immediately. Interviewers also pay attention to how you think, how you communicate trade-offs, how you respond to uncertainty, and whether you can structure an explanation clearly. That is why soft skills matter even in highly technical rounds.

The STAR format is useful for behavioral questions because it keeps answers organized: situation, task, action, and result. In technical discussions, asking clarifying questions and explaining assumptions often creates a stronger impression than rushing toward an answer that is not grounded.`,
      code: `const starAnswer = {
  situation: 'Bug blocked release',
  task: 'Find root cause fast',
  action: 'Traced API logs and fixed auth middleware',
  result: 'Release completed on time',
};

console.log(starAnswer);`,
      language: 'javascript',
      readMore: true,
    },
  },
}

export function enrichSectionsWithTopicDetails(sections) {
  return sections.map((section) => ({
    ...section,
    topics: section.topics.map((topic) => {
      const details = fundamentalTopicDetails[section.tag]?.[topic.name] ?? emptyTopicDetail

      return {
        ...topic,
        ...details,
        slug: slugifyTopic(topic.name),
      }
    }),
  }))
}

export function findTopicByTagAndSlug(sections, tag, slug) {
  for (const section of sections) {
    if (section.tag !== tag) {
      continue
    }

    const topic = section.topics.find((item) => item.slug === slug)

    if (topic) {
      return {
        section,
        topic,
      }
    }
  }

  return null
}
