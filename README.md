# <img src="public/images/logo.svg" alt="React2Tech Logo" width="30" height="30" style="vertical-align: middle;"> React2Tech

React2Tech is an interactive React quiz application designed to help developers test and improve their React knowledge. All the quiz questions and explanations in this application were generated with the assistance of AI and have not been thoroughly reviewed, so users should verify the content with official resources.

---

## Version

**0.0.1-beta**

---

## Features

- **Three Difficulty Levels**: Progress from React fundamentals to advanced concepts.
- **Timed Quizzes**: Challenge yourself with time constraints.
- **Detailed Explanations**: Learn from comprehensive explanations for each question.
- **Progress Tracking**: Monitor your progress during quizzes.
- **Responsive Design**: Works on both desktop and mobile devices.
- **Dark/Light Mode**: Choose your preferred theme.

---

## Tech Stack

- **Framework**: Next.js 15
- **UI Library**: React 19 with Tailwind CSS
- **Styling**: Tailwind CSS with custom animations
- **State Management**: React Context API
- **TypeScript**: For enhanced type safety and a better developer experience

---

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. **Clone the repository:**

       git clone https://github.com/3merillon/react2tech.git
       cd react2tech

2. **Install dependencies:**

       npm install
       or
       yarn install

3. **Run the development server:**

       npm run dev
       or
       yarn dev

4. **Open your browser:**

   Visit [http://localhost:3000](http://localhost:3000) to see the application in action.

---

## Build

To build the application for production, run:

       npm run build
       or
       yarn build

---

## Usage

1. Select a difficulty level from the home page.
2. Read the instructions and start the quiz.
3. Answer the questions within the time limit.
4. Review your results and detailed explanations at the end.
5. Restart the quiz or try a different level.

---

## Project Structure

       react2tech/
       ├── app/                # Next.js app directory
       ├── components/         # Reusable UI components
       │   ├── layout/         # Layout components (header, footer)
       │   ├── quiz/           # Quiz-specific components
       │   ├── theme/          # Theme components
       │   └── ui/             # UI components (buttons, cards, etc.)
       ├── contexts/           # React context providers
       ├── hooks/              # Custom React hooks
       ├── lib/                # Utility functions
       ├── public/             # Static assets
       └── types/              # TypeScript type definitions

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create your feature branch:

       git checkout -b feature/amazing-feature

3. Commit your changes:

       git commit -m 'Add some amazing feature'

4. Push to the branch:

       git push origin feature/amazing-feature

5. Open a Pull Request.

---

## License

This project is licensed under the **MIT License** – see the LICENSE file for details.

---

## Acknowledgments

- Built with [Next.js](https://nextjs.org/).
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/).
- Icons provided by [Lucide](https://lucide.dev/).
