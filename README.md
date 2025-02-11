# Conference Ticket Generator

A Next.js-based application that allows users to generate conference tickets by filling out a form with their details. The form includes validation, state persistence, and accessibility features. Upon successful submission, a ticket is generated and displayed.

## Features

### Core Features
1. **Form Elements**:
   - Full Name: Text input for the user's full name.
   - Email Address: Email input field.
   - Avatar Upload: Users can upload their avatar image via a URL (e.g., Cloudinary).
   - Submit Button: Button to submit the form.

2. **Form Validation**:
   - Ensures all required fields are filled.
   - Validates email format.
   - Validates avatar URL.
   - Displays clear error messages for invalid inputs.

3. **State Persistence**:
   - Uses `localStorage` or `IndexedDB` to retain user inputs even after page refresh.

4. **Ticket Generation**:
   - Generates a ticket with the user's full name, email, and avatar.
   - Ticket is displayed only after successful form submission and validation.

5. **Accessibility**:
   - All form fields, hints, and error messages are screen-reader accessible.
   - Supports keyboard navigation and focus states.

6. **Responsive Design**:
   - Optimized for all screen sizes (desktop, tablet, and mobile).

### Additional Features
- **Modular Code**: Well-structured and reusable components.
- **React Hooks**: Uses `useState`, `useEffect`, and custom hooks for state management and validation.
- **Testing**: Includes unit tests using React Testing Library.

---

## Technologies Used
- **Frontend**: Next.js, React
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Form Handling**: React Forms
- **Image Hosting**: Cloudinary (for avatar uploads)
- **State Persistence**: `localStorage` or `IndexedDB`
- **Testing**: React Testing Library
- **Styling**: CSS Modules or Tailwind CSS (optional)
- **Accessibility**: ARIA attributes, semantic HTML
- **Responsive Design**: CSS Media Queries, Flexbox, Grid

---

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Cloudinary account (for image hosting, optional)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Peliah/event-ticket-generator.git
   cd event-ticket-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Cloudinary credentials (if using):
   ```env
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
   NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

---

## Project Structure
```
conference-ticket-generator/
├── public/               # Static assets (images, fonts, etc.)
├── src/
│   ├── components/       # Reusable React components
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Next.js pages
│   ├── styles/           # CSS or SCSS files
│   ├── utils/            # Utility functions (e.g., validation, storage)
│   └── __tests__/        # Test files
├── .env.local            # Environment variables
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

---

## Usage
1. Fill out the form with your full name, email, and avatar URL.
2. Click the "Submit" button.
3. If all inputs are valid, a conference ticket will be generated and displayed.
4. If there are validation errors, error messages will appear near the respective fields.

---

## Testing
Run the test suite using:
```bash
npm test
# or
yarn test
```

---

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments
- [React Documentation](https://react.dev/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Cloudinary](https://cloudinary.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---