import { useState, useEffect } from 'react';

// ! вернется 1 потому, что 0 приводится к undefined
console.log(0 ?? 1);
// ! вернется 5 потому, что undefined
console.log(undefined ?? 5);
// ! вернется false потому, что false не undefined!
console.log(false ?? true);

// ! Если слева не undefined, то вернет левую !

export default function SignUpForm() {
  const [email, setEmail] = useState(() => {
    // ! Ленивая иннициализация состояния - для того, чтобы не вызывалась при каждом перерендере !
    // Эта функция вызовется только при 1 рендере, а после будет игнорироваться интерпритатором
    return JSON.parse(window.localStorage.getItem('email')) ?? '';
  });
  const [password, setPassword] = useState(() => {
    return JSON.parse(window.localStorage.getItem('password')) ?? '';
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  // 2 разных куска стэйта, поэтому лучше заюзать 2 useEffect
  useEffect(() => {
    // ! window. - указывает что это именно страничный локал сторэдж
    window.localStorage.setItem('email', JSON.stringify(email));
  }, [email]);

  useEffect(() => {
    // ! window. - указывает что это именно страничный локал сторэдж
    window.localStorage.setItem('password', JSON.stringify(password));
  }, [password]);

  return (
    <form className="" autoComplete="false">
      <label>
        <span>Email</span>
        <input type="email" name="email" value={email} onChange={handleChange} />
      </label>

      <label>
        <span>Password</span>
        <input
          type="passwords"
          value={password}
          name="password"
          onChange={handleChange}
        />
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

// <label>
//   <span>Password</span>
//   <input
//     type="password"
//     value={this.state.password}
//     name="password"
//     onChange={this.handleChange}
//   />
// </label>

//           <button type="submit">Register</button>
//         </form>
//       </div>
//     );
//   }
// }
