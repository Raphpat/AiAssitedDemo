# Math Application

A modern full-stack application featuring a Spring Boot backend and Angular frontend for mathematical operations.

## Features

- Calculator with basic arithmetic operations
- Prime number checker
- Modern, responsive UI with floating animations
- Type-safe implementation with strict TypeScript
- RESTful API with Spring Boot

## Tech Stack

### Backend

- Java 21
- Spring Boot 3.2.3
- Gradle build system
- RESTful API with CORS support

### Frontend

- Angular (latest)
- TypeScript with strict mode
- SCSS with modern styling system
- Standalone components architecture

## Getting Started

### Prerequisites

- Java 21 JDK
- Node.js (latest LTS version)
- Angular CLI
- VS Code (recommended)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd math-application
```

2. Install frontend dependencies:

```bash
cd frontend
npm install
```

3. Build the backend:

```bash
./gradlew build
```

## Development

The project includes VS Code launch configurations for easy development:

- **"MathApplication"**: Launches Spring Boot backend (port 8080)
- **"Launch Frontend"**: Starts Angular dev server (port 4200)
- **"Launch Full Stack"**: Starts both frontend and backend

### Running the Application

1. Start the backend:

```bash
./gradlew bootRun
```

2. Start the frontend:

```bash
cd frontend
ng serve
```

Access the application at `http://localhost:4200`

## Project Structure

### Backend

```
src/main/java/com/example/
├── MathUtils.java       # Core math operations
├── MathApplication.java # Spring Boot application
└── MathController.java  # REST endpoints
```

### Frontend

```
frontend/src/
├── app/
│   ├── components/
│   │   ├── calculator/
│   │   └── prime-checker/
│   └── services/
│       └── math.service.ts
└── styles/
    ├── _variables.scss
    ├── _typography.scss
    └── _mixins.scss
```

## Styling System

The frontend implements a modern SCSS styling system:

- **Design Tokens**: Centralized in `_variables.scss`

  - Color palette
  - Typography scale
  - Spacing system
  - Breakpoints

- **Typography**:

  - Inter font for general text
  - Fira Code for input fields
  - Optimized rendering settings

- **Components**:
  - Floating animations
  - Responsive layouts
  - Modern gradient backgrounds
  - Card-based UI

## API Endpoints

- `GET /api/math/calculate` - Perform calculations
- `GET /api/math/prime-check` - Check if a number is prime

## TypeScript Standards

- Strict type checking enabled
- Interface segregation
- Discriminated unions for state
- Readonly types where appropriate
- Modern ES features
- Proper type guards

## Contributing

1. Create a feature branch (`git checkout -b feat/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feat/amazing-feature`)
4. Open a Pull Request

## Current Status

- ✅ Backend implementation complete
- ✅ Frontend components complete
- ✅ Styling system implemented
- ✅ Java 21 upgrade complete
- ✅ Angular dependencies resolved
- 🚧 API endpoints refinement

## TODO

- Create remaining REST endpoints
- Monitor font loading and styling issues
- Add unit tests for new endpoints
- Add E2E tests for critical user flows
