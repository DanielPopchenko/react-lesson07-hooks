// ! Импортируем свой хук из нашей папки
import useLocalStorage from '../../hooks/useLocalStorage';

// -------------

// ! Свой Хук. Позволили нам переиспользовать нашу логику

export default function SignUpForm() {
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

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

  // ! 2 useEffect не нужны, потому что у нас есть свой хук, в который подставляются нужные значения´
  // // 2 разных куска стэйта, поэтому лучше заюзать 2 useEffect
  // useEffect(() => {
  //   // ! window. - указывает что это именно страничный локал сторэдж
  //   window.localStorage.setItem('email', JSON.stringify(email));
  // }, [email]);

  // useEffect(() => {
  //   // ! window. - указывает что это именно страничный локал сторэдж
  //   window.localStorage.setItem('password', JSON.stringify(password));
  // }, [password]);

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
