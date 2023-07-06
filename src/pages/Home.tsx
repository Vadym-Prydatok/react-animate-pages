import '../App.css'
import { FC } from "react"

export const Home: FC = () => {
  return (
    <div className='home'>
      <h1>Home Page</h1>

      <h3>
        These animation techniques are suitable for use in
        corporate projects where minimal external libraries are preferred.
      </h3>

      <h3>
        If you are a freelancer, you can show this template to the
        client so that he chooses the option he likes
      </h3>

      <h4>The advantages of using SwitchTransition and CSSTransition include:</h4>

      <ul>
        <li>
          Seamless transitions: SwitchTransition allows for smooth transitions
          between components, providing a visually appealing user experience.
        </li>

        <li>
          CSS-based animations: CSSTransition leverages CSS classes and animations,
          making it easy to create and customize transition effects using standard CSS properties
        </li>

        <li>
          Flexibility: The use of useState and useLocation hooks enables
          dynamic control over the animation type and adapts
          the animation based on the current route or other application state
        </li>

        <li>
          Reduced external dependencies: By utilizing these built-in
          React animation components, you can minimize the need for additional
          third-party animation libraries, reducing the overall project dependencies.
        </li>

        <li>
          By using SwitchTransition and CSSTransition,
          you can create professional-looking animated transitions
          in your corporate projects while keeping the codebase
          lightweight and relying on the native capabilities of React.
        </li>
      </ul>

      <a
        className='created'
        href='https://github.com/Vadym-Prydatok'
        target="_blank"
        rel="noreferrer"
      >
        • Created by Vadym Prydatok •
      </a>
    </div>
  )
}