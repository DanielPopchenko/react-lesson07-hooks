import { useState } from 'react';

export default function SignUpForm() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <form className="" autoComplete="false">
      <label>
        <span>Email</span>
        <input type="email" name="email" value={email} onChange={handleEmailChange} />
      </label>

      <button type="submit">Register</button>
    </form>
  );
}

// class OldSignUpForm extends Component {
//   state = {
//     password: '',
//     email: '',
//   };

//   handleChange = (evt) => {
//     const { name, value } = evt.target;

//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <div>
//         <form className="" autoComplete="false">
//           <label>
//             <span>Email</span>
//             <input
//               type="email"
//               value={this.state.email}
//               name="email"
//               onChange={this.handleChange}
//             />
//           </label>

//           <label>
//             <span>Password</span>
//             <input
//               type="password"
//               value={this.state.password}
//               name="password"
//               onChange={this.handleChange}
//             />
//           </label>

//           <button type="submit">Register</button>
//         </form>
//       </div>
//     );
//   }
// }
