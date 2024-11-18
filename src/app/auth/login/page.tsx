export default function Login() {
  return (
    <div className="wrapper px-6">
      <div className="card rounded overflow-hidden shadow-lg p-4">
        <div className="login-page">
          <h1>Login</h1>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
