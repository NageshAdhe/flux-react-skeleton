
'use client';
import React, { useState } from 'react';
import { Form } from '../../shared/components/Form'; // Import the library
import { Input } from '../../shared/components/Input';

export default function Login() {
  // State for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // State for error messages
  const [errors, setErrors] = useState<{ email?: string, password?: string }>({});
  
  // Validation functions
  // const validateEmail = (email: string) => {
  //   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //   if (!email) return 'Email is required';
  //   if (!emailRegex.test(email)) return 'Please enter a valid email address';
  //   return '';
  // };

  // const validatePassword = (password: string) => {
  //   if (!password) return 'Password is required';
  //   if (password.length < 6) return 'Password must be at least 6 characters';
  //   return '';
  // };

  // Handle form submission
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   // Validate fields
  //   const emailError = validateEmail(email);
  //   const passwordError = validatePassword(password);

  //   // Set errors if any
  //   setErrors({
  //     email: emailError,
  //     password: passwordError
  //   });

  //   // If no errors, handle form submission logic
  //   if (!emailError && !passwordError) {
  //     alert('Form submitted successfully!');
  //     // Proceed with form submission (e.g., API call)
  //   }
  // };


  const [formStatus, setFormStatus] = useState<string>('');
  const [values, setValues] = useState<any>({});
   // Custom submit handler passed to the Form component
   const handleFormSubmit = (values: any, errors: any) => {
    alert("asasda")
    // Here, you can handle API calls or business logic
    console.log('Form values:', values);
    console.log('Form errors:', errors);

    // Simulate an API call
    setTimeout(() => {
      if (Object.keys(errors).length === 0) {
        setFormStatus('Form submitted successfully!');
        // Perform API submission here (e.g., send `values` to an API)
      } else {
        setFormStatus('Form has errors. Please fix them.');
      }
    }, 1000);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="wrapper-page">
      <div className="flex flex-auto">
        <div className="sign-in-left relative flex min-w-0 h-full flex-auto flex-col items-center w-full px-4 py-8 md:w-1/2">
          <svg viewBox="0 0 960 540" width="100%" height="100%" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg"className="absolute inset-0 pointer-events-none ng-tns-c1608065504-85">
            <g fill="none" stroke="currentColor" stroke-width="100"className="opacity-25">
              <circle r="234" cx="196" cy="23"></circle>
              <circle r="234" cx="790" cy="491"></circle>
            </g>
          </svg>
          <svg viewBox="0 0 220 192" width="220" height="192" fill="none" className="absolute -top-16 -left-16 text-gray-700 ng-tns-c2381817493-1">
            <defs className="ng-tns-c2381817493-1">
              <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" className="ng-tns-c2381817493-1">
                <rect x="0" y="0" width="4" height="4" fill="currentColor" className="ng-tns-c2381817493-1"></rect>
              </pattern>
            </defs>
            <rect width="220" height="192" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" className="ng-tns-c2381817493-1"></rect>
          </svg>
          <div className="relative z-10 w-full max-w-2xl ng-tns-c2381817493-1">
            <div className="text-7xl font-bold leading-none text-gray-100 ng-tns-c2381817493-1">
              <div className="ng-tns-c2381817493-1">Welcome to</div>
              <div className="ng-tns-c2381817493-1">our community</div>
              </div>
              <div className="mt-6 text-lg leading-6 tracking-tight text-gray-400 ng-tns-c2381817493-1"> 
                Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. </div>
               </div>
        </div>
        <div className="sign-in-right bg-blue-900 flex min-w-0 flex-auto flex-col items-center w-full px-4 py-8 md:w-1/2">
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        {/* =====================Login form================ */}
        {/* Title and Subtitle */}
        <h1 className="text-2xl font-bold text-gray-900">Sign in</h1>
        <p className="text-sm text-gray-600 mt-2">
          Don’t have an account?{' '}
          <a href="#" className="text-primary-600 hover:underline">
            Sign up
          </a>
        </p>

        {/* Info Box */}
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded">
          <p className="text-sm text-blue-700">
            You are browsing <strong>Fuse Demo</strong>. Click on the "Sign in"
            button to access the Demo and Documentation.
          </p>
        </div>
/*
        {/* Form */}
        <Form onSubmit={handleFormSubmit}>
        <Input
                  type="email"
                  name="email"
                  label="Email Address"
                  onChange={handleChange}
                  validations={{ required: true, pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$' }} value={''}        />
        <Input
                  type="password"
                  name="password"
                  label="Password"
                  onChange={handleChange}
                  validations={{ required: true, minLength: 6 }} value={''}        />
        <button type="submit" className="bg-blue-500 text-white p-2 mt-4 rounded">Submit</button>
      </Form>

      {/* Display form submission status */}
      {formStatus && <p className="text-center mt-4">{formStatus}</p>}
        {/* Divider */}
        <div className="mt-6 flex items-center">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="mx-4 text-sm text-gray-500">Or continue with</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        {/* Social Buttons */}
        <div className="mt-4 flex justify-center space-x-4">
          <button
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 shadow"
            aria-label="Sign in with Facebook"
          >
            {/* Facebook Icon */}
            <svg className="h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="..."></path>
            </svg>
          </button>
          <button
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 shadow"
            aria-label="Sign in with Twitter"
          >
            {/* Twitter Icon */}
            <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="..."></path>
            </svg>
          </button>
          <button
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 shadow"
            aria-label="Sign in with GitHub"
          >
            {/* GitHub Icon */}
            <svg className="h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="..."></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
        </div>
      </div>


      
    </div>
  );
}
