import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Img from './assets/img.png';
import { InputAdornment, IconButton } from '@mui/material';
import { RiEyeOffLine, RiEyeLine } from "react-icons/ri";
import Brand from "./assets/brand.png";
import Button from "./GradientButton";

const App = () => {


  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, rememberMe });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };



  return (
    <div class="mx-auto flex h-full w-full md:flex-row flex-col items-center bg-[#FFFFFF]">
      <img class="object-cover object-center rounded hidden md:block h-[100vh]" alt="hero" src={Img} />

      <div className='sm:hidden flex md:flex xl:hidden flex-row items-center ml-[-55%]'>
        <img src={Brand} alt="brand" />
        <p className='text-2xl font-semibold'>MATERIO</p>
      </div>

      <form action="#" method="POST" className="h-[80vh] w-full flex flex-col justify-center items-center">
        <div className="flex w-full items-center justify-center">
          <div className="bg-[#FFFFFF] p-5 sm:p-0 w-full max-w-md">

            <h2 className="text-[25px] font-medium text-gray-800 tracking-wide mb-2">Welcome to Materio!👋🏻</h2>

            <p className="text-lg text-gray-500 tracking-wide xl:w-[80%] lg:w-[80%] md:w-[100%] sm:w-[100%] mb-2">
              Please sign in to your account and start the adventure
            </p>

            <div className="bg-purple-100 p-4 rounded-lg text-purple-700 mb-4 ">
              Email: <span className='font-semibold'>admin@materio.com</span> / Pass: <span className='font-semibold'>admin</span>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
              <div className="mb-4 w-full">
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  margin="normal"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'transparent',
                    },
                  }}
                />
              </div>

              <div className="mb-4 w-full">
                <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  fullWidth
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              <div className="flex items-center justify-between w-full mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="appearance-none h-5 w-5 border-[3px] border-purple-600 rounded-md checked:bg-purple-600 checked:border-purple-600 checked:focus:bg-purple-600 focus:outline-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M5 13l4 4L19 7' /%3E%3C/svg%3E")` }}
                  />
                  <span className="ml-2 text-sm text-gray-700">Remember me</span>
                </label>
                <a href="#" className="text-sm text-purple-600 hover:underline">Forgot password?</a>
              </div>

              <div className="mb-6 w-full">
                <button
                  type="submit"
                  className="w-full bg-purple-500 text-white py-2 px-6 rounded-lg hover:bg-purple-600 transition duration-200"
                >
                  Log In
                </button>
              </div>

              <Button text="Buy now"/>

              <div className="text-center w-full">
                <p className="text-sm text-gray-500">New on our platform? <a href="#" className="text-purple-600 hover:underline">Create an account</a></p>
              </div>
            </form>
          </div>
        </div>
      </form>

    </div>

  )
}

export default App