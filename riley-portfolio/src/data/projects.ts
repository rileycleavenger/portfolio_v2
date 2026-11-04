import {
  backtesterImage,
  esp32CatFeederImage,
  gatorPathTrackerImage,
  goodEatsImage,
  huffmanTreeEncoderImage,
  mealDealzImage,
  melee4kImage,
  memoryNetworkImage,
  minimaxSmashImage,
  modernJukeboxHwImage,
  modernJukeboxImage,
  neoPixelMatrixImage,
  petAdoptionImage,
  pongImage,
  raspotifyRfidImage,
  siliconStudioImage,
  stockBuddyImage,
  tradingStrategyImage,
  userspaceFilesystemImage,
  webDriverDockerImage,
} from '../assets';
import { Project, ProjectLink, Tag } from '../types';

export const filters: { id: Tag; label: string }[] = [
  { id: 'ai', label: 'ML/AI' },
  { id: 'games', label: 'Games' },
  { id: 'tools', label: 'Developer Tools' },
  { id: 'hardware', label: 'Hardware' },
];

export const tagLabel = (id: Tag) => filters.find((f) => f.id === id)?.label ?? id;

const github = (repo: string, label = 'GitHub'): ProjectLink => ({
  label,
  href: `https://github.com/rileycleavenger/${repo}`,
});

// The projects page shows these in this order.
export const projects: Project[] = [
  {
    name: 'Melee 4K & Melee++',
    year: 2026,
    tags: ['games'],
    summary: 'Super Smash Bros. Melee running natively on Mac and Windows in 4K, widescreen, and up to 144 fps, plus an edition with four new fighters.',
    description:
      'Melee 4K is a fork of the melee-pc native port with a one-step installer for Apple Silicon and Windows. Frames above 60 fps are blended between the game’s 60 Hz ticks, so the simulation is untouched, and a replay test checks that smoothing never changes a match. It adds HD texture packs, online lobbies across Mac and PC, and crash fixes verified by a soak test of every stage with every costume. Its sister edition, Melee++, builds from the same source tree and adds Geno, King Boo, Optimus Prime, and the Crewmate, each with their own moves, specials, and effects.',
    stack: ['C', 'C++', 'CMake', 'SDL3', 'Python'],
    links: [github('melee-4k', 'Melee 4K'), github('melee-plus-plus', 'Melee++')],
    media: { kind: 'image', src: melee4kImage, alt: 'Four fighters mid-match on Yoshi’s Story, rendered in widescreen 4K' },
  },
  {
    name: 'Silicon Studio',
    year: 2026,
    tags: ['ai', 'tools'],
    summary: 'A desktop workbench for fine-tuning and running LLMs locally on Apple Silicon.',
    description:
      'Built on Apple’s MLX framework, it puts data preparation, model management, LoRA and QLoRA fine-tuning, and evaluation in one native app. Data prep strips PII before anything is trained, and a built-in chat lets you try an adapter the moment it finishes, all without data leaving the Mac.',
    stack: ['MLX', 'Electron', 'React', 'TypeScript', 'Python', 'C++'],
    links: [github('Silicon-Studio')],
    media: { kind: 'image', src: siliconStudioImage, alt: 'Silicon Studio’s fine-tuning workspace' },
  },
  {
    name: 'claude-squad',
    year: 2026,
    tags: ['ai', 'tools'],
    summary: 'A terminal workspace for running a team of Claude agents in parallel, each in its own git worktree.',
    description:
      'Every agent is a long-running Claude Agent SDK session with its own tab, branch, and worktree, so several can edit one project at once without clobbering each other. They coordinate in a shared #groupchat where an @mention interrupts only the agents it names; the rest catch up at their next turn. An agent’s entire configuration is one markdown file.',
    stack: ['TypeScript', 'Node.js', 'Ink', 'Claude Agent SDK'],
    links: [github('claude-squad')],
    media: { kind: 'terminal' },
  },
  {
    name: 'Minimax Smash',
    year: 2026,
    tags: ['games', 'ai'],
    summary: 'A 2D platform fighter whose CPU plans every move with an alpha-beta game-tree search. Search depth is the difficulty setting.',
    description:
      'Both fighters commit on the same 10-frame beat, so the CPU picks the action whose worst-case reply is least bad. Killer-move ordering cut the depth-6 search from 972k nodes to 195k, and a fighter locked in an attack collapses to a single branch, which is what lets the hardest CPU finish inside one beat. The search steps the same frame function as the game, so it never mispredicts a move.',
    stack: ['C++17', 'raylib'],
    links: [github('minimax-smash')],
    media: { kind: 'image', src: minimaxSmashImage, alt: 'Two CPU fighters on stage, with the search overlay showing depth, node count, and the maximin value of each action' },
  },
  {
    name: 'S&P 500 Backtester',
    year: 2026,
    tags: [],
    summary: 'An interactive backtester for technical-indicator strategies over ten years of S&P 500 data.',
    description:
      'Toggle any of eight indicators, from RSI and MACD to Bollinger Bands and volume spikes, tune their parameters and the date range, and return, drawdown, and Sharpe against buy-and-hold recompute instantly. A full pass over 2,513 trading days takes under a millisecond, so the app has no loading states. Trades fill on the next bar to avoid look-ahead bias, and a verify script checks the math.',
    stack: ['React', 'TypeScript', 'Vite', 'Lightweight Charts'],
    links: [github('backtrade-technical-indicators')],
    media: { kind: 'image', src: backtesterImage, alt: 'Backtester dashboard comparing a moving-average strategy with buy-and-hold' },
  },
  {
    name: 'Memory Network QA',
    year: 2026,
    tags: ['ai'],
    summary: 'A key-value memory network that answers natural-language questions about Wikipedia biographies.',
    description:
      'Infobox facts for 900 politicians are stored as key-value memories, and the network attends over them to answer free-text questions like “When was Alexander Hamilton born?” It reaches 83% accuracy on test questions phrased with templates it never saw in training, ranging from 61% on the hardest relation to 96% on birth dates.',
    stack: ['Python', 'PyTorch', 'NLTK'],
    links: [],
    media: { kind: 'image', src: memoryNetworkImage, alt: 'Test accuracy for each of the 15 relations, from 96% on birth dates to 61% on president, against 83% overall' },
  },
  {
    name: 'What Drives Pet Adoption?',
    year: 2025,
    tags: ['ai'],
    summary: 'A Bayesian look at which economic and demographic factors move U.S. pet adoptions.',
    description:
      'Combines 25 years of national adoption estimates from Shelter Animals Count, the ASPCA, and the AVMA with S&P 500 returns, births, household income, and single-person households. Robust Student-t and negative-binomial regressions in PyMC are compared with leave-one-out cross-validation, and posterior predictive simulations play out what-if scenarios for 2025. Household income comes out as the strongest, if uncertain, driver.',
    stack: ['Python', 'PyMC', 'ArviZ', 'pandas'],
    links: [],
    media: { kind: 'image', src: petAdoptionImage, alt: 'U.S. adoptions per year from 2000 to 2024 against the model’s predictions' },
  },
  {
    name: 'Learned Trading Strategy',
    year: 2025,
    tags: ['ai'],
    summary: 'A trading strategy learned from technical indicators, tested against a hand-built rule set and buy-and-hold.',
    description:
      'A bagged ensemble of random decision trees learns to call each day long, short, or flat from technical indicators, with market impact built into its training labels. It is evaluated against a hand-tuned rule-based strategy and a buy-and-hold benchmark, in and out of sample, with commissions and impact simulated, plus an experiment on how rising impact changes the way the learner trades.',
    stack: ['Python', 'pandas', 'NumPy'],
    links: [],
    media: { kind: 'image', src: tradingStrategyImage, alt: 'Portfolio value of the learned strategy over 2008–2009 at three market-impact costs' },
  },
  {
    name: 'StockBuddy',
    year: 2024,
    tags: ['ai'],
    summary: 'A web app that turns daily market data and scraped headlines into LLM stock picks, then tracks how those picks did.',
    description:
      'A scheduled job gathers price data from Alpha Vantage and scrapes the day’s stock news, and GPT-4 turns both into suggested buys. Suggestions are saved to your account so you can check them against later share prices and see what you would have made.',
    stack: ['React', 'TypeScript', 'Python', 'Docker', 'Google Cloud', 'OpenAI API'],
    links: [github('StockBuddy')],
    media: { kind: 'image', src: stockBuddyImage, alt: 'Mockup of the StockBuddy dashboard: daily buy and sell picks with reasons drawn from headlines, and how past picks performed' },
  },
  {
    name: 'Web Driver Docker',
    year: 2024,
    tags: ['tools'],
    summary: 'A ready-to-run Docker setup for scraping with Selenium’s web driver.',
    description:
      'Send the container a GET request with any URL and it returns that page’s rendered source as a text file, which makes scraping easy to drive from an external scheduler. It is meant as a minimal starting point for anyone combining Selenium and Docker.',
    stack: ['Python', 'Selenium', 'Flask', 'Docker'],
    links: [github('SeleniumWebScraper-Docker')],
    media: { kind: 'image', src: webDriverDockerImage, alt: 'Web Driver Docker example request and response' },
  },
  {
    name: 'FPGA Pong',
    year: 2024,
    tags: ['games', 'hardware'],
    summary: 'Pong written entirely in VHDL on a DE10-Lite FPGA board, drawn on a VGA monitor.',
    description:
      'The design generates its own VGA sync timing and draws from bitmaps in hardware, with score counters and menu screens on top of the classic game.',
    stack: ['VHDL', 'Quartus Prime', 'FPGA'],
    links: [github('pong')],
    media: { kind: 'image', src: pongImage, alt: 'A frame of the game as the FPGA draws it: purple paddles and ball on black, with an 8–7 score' },
  },
  {
    name: 'ESP32 Cat Feeder',
    year: 2024,
    tags: ['hardware'],
    summary: 'Tells everyone in the house when the cat has been fed, so it never gets fed twice.',
    description:
      'An ESP32 microcontroller watches a switch on its GPIO pins and sends a message through the Telegram API to my roommates and me whenever it is flipped.',
    stack: ['C', 'C++', 'ESP32', 'Telegram API'],
    links: [github('Cat-Feeder-ESP32')],
    media: { kind: 'image', src: esp32CatFeederImage, alt: 'The ESP32 cat feeder switch' },
  },
  {
    name: 'Gator Path Tracker',
    year: 2023,
    tags: [],
    summary: 'Schedule planning for University of Florida students, with each course rated by how hard it really is.',
    description:
      'Builds class schedules from current course data served by a custom scraping API (Selenium and Flask in Docker on Google Cloud). Each course shows ratings collected from popular course-review sites alongside difficulty scores derived with NLP from student discussion. The front end is Angular, hosted on Firebase.',
    stack: ['Angular', 'TypeScript', 'Python', 'Flask', 'Selenium', 'Docker', 'Google Cloud', 'Firebase'],
    links: [{ label: 'Live site', href: 'https://gatorpathtracker.com' }, github('GatorPathTracker')],
    media: { kind: 'image', src: gatorPathTrackerImage, alt: 'Gator Path Tracker schedule planner' },
  },
  {
    name: 'The Modern Jukebox',
    year: 2023,
    tags: [],
    summary: 'A shared music queue: anyone with the session code can add songs, no Spotify login needed.',
    description:
      'One person starts a session by signing in to Spotify; everyone else joins with the session ID to queue songs and control playback on a Raspberry Pi player. The React app talks to a Node.js server that relays the queue to the Pi (see The Modern Jukebox Player).',
    stack: ['React', 'TypeScript', 'Node.js', 'Python', 'Spotify API', 'Vercel'],
    links: [{ label: 'Live site', href: 'https://the-modern-jukebox-react-app.vercel.app/' }],
    media: { kind: 'image', src: modernJukeboxImage, alt: 'The Modern Jukebox web app' },
  },
  {
    name: 'The Modern Jukebox Player',
    year: 2023,
    tags: ['hardware'],
    summary: 'The Raspberry Pi player behind The Modern Jukebox.',
    description:
      'It connects to the project’s server to play the shared Spotify queue, shows the previous, current, and next songs on an SFML display, and takes input from physical buttons or any HDMI-CEC remote.',
    stack: ['Python', 'C++', 'C', 'Raspberry Pi', 'Node.js'],
    links: [github('TheModernJukebox')],
    media: { kind: 'image', src: modernJukeboxHwImage, alt: 'The Modern Jukebox player display' },
  },
  {
    name: 'MealDealz',
    year: 2023,
    tags: [],
    summary: 'A team-built app that plans meals around the week’s grocery sales.',
    description:
      'Built with an agile team. I wrote the RESTful API in Go, which runs its computation concurrently and serves data from an Azure-hosted SQL database, plus Python scrapers that collect weekly sales from chain grocery stores’ websites.',
    stack: ['Go', 'Angular', 'TypeScript', 'Python', 'Selenium', 'Azure SQL'],
    links: [{ label: 'GitHub', href: 'https://github.com/TylerMetz/Saucier720' }],
    media: { kind: 'image', src: mealDealzImage, alt: 'MealDealz recipe and deals view' },
  },
  {
    name: 'Userspace Filesystem',
    year: 2023,
    tags: ['tools'],
    summary: 'A library and userspace daemon that mount WAD game-data archives as ordinary directories.',
    description:
      'libWad reads and writes WAD files as if they were a real directory tree, using an n-ary tree of entries plus maps from each path to its node and to folder end markers. The daemon built on it mounts a WAD file so it can be browsed and written with normal file tools.',
    stack: ['C++', 'C', 'Linux'],
    links: [],
    media: { kind: 'image', src: userspaceFilesystemImage, alt: 'A mounted WAD file browsed from the terminal' },
  },
  {
    name: 'NeoPixel Matrix Level',
    year: 2023,
    tags: ['hardware'],
    summary: 'A bubble level drawn on an LED matrix by an RP2040.',
    description:
      'The RP2040 reads its accelerometer and gyroscope and draws the level on a NeoPixel matrix. The matrix drivers are written in C++, and the level itself in Rust.',
    stack: ['Rust', 'C++', 'C', 'RP2040'],
    links: [],
    media: { kind: 'image', src: neoPixelMatrixImage, alt: 'NeoPixel matrix showing the level' },
  },
  {
    name: 'The Good Eats',
    year: 2022,
    tags: [],
    summary: 'Finds local, non-chain restaurants near you in a dataset of 700,000 U.S. restaurants.',
    description:
      'Search by latitude and longitude or by state and county. The results are filtered with both a hash map and a hash set, and the program reports each one’s runtime so you can compare them.',
    stack: ['C++'],
    links: [github('TheGoodEats')],
    media: { kind: 'image', src: goodEatsImage, alt: 'The Good Eats search results in the terminal' },
  },
  {
    name: 'Huffman Tree Encoder',
    year: 2022,
    tags: ['tools'],
    summary: 'Text compression with Huffman coding, built around a priority queue.',
    description:
      'The encoder class compresses any string passed to its constructor, with file handling kept separate, so the class can be reused beyond text files and reads as a clean demonstration of the algorithm.',
    stack: ['C++'],
    links: [github('Huffman-Tree-Encoder')],
    media: { kind: 'image', src: huffmanTreeEncoderImage, alt: 'Huffman tree encoder output' },
  },
  {
    name: 'Raspotify RFID Player',
    year: 2022,
    tags: ['hardware'],
    summary: 'A Raspberry Pi “record player”: tap an RFID tag to play the album, track, or playlist linked to it.',
    description:
      'Python and C/C++ on a Raspberry Pi read tags from a connected RFID reader and map each one to Spotify content through the Spotify Developer API.',
    stack: ['Python', 'C', 'C++', 'Raspberry Pi', 'Spotify API'],
    links: [github('SpotiPi-Project')],
    media: { kind: 'image', src: raspotifyRfidImage, alt: 'The Raspberry Pi RFID player' },
  },
];
