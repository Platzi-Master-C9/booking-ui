import styles from '../styles/Home.module.scss';

export default function DesignSystem() {
  return (
    <div className="container">
      <h1>Booking System's Design Tokens</h1>
      <p>The design tokens for this projects are the next ones:</p>
      <details>
        <summary>
          <h2>Colors</h2>
        </summary>
        <h3>Main colors</h3>
        <ul className="flex-container" role="list">
          <li>
            <div
              className="bg-main-400"
              style={{ width: '150px', height: '100px' }}
            ></div>
            <h4>
              <code>main-color-400</code>
            </h4>
            <dl>
              <dt>HSL:</dt>
              <dd>hsl(200, 77%, 36%)</dd>
            </dl>
          </li>
          <li>
            <div
              className="bg-main-500"
              style={{ width: '150px', height: '100px' }}
            ></div>
            <h3>
              <code>main-color-500</code>
            </h3>
            <dl>
              <dt>HSL:</dt>
              <dd>hsl(200, 95%, 46%)</dd>
            </dl>
          </li>
          <li>
            <div
              className="bg-main-900"
              style={{ width: '150px', height: '100px' }}
            ></div>
            <h3>
              <code>main-color-900</code>
            </h3>
            <dl>
              <dt>HSL:</dt>
              <dd>hsl(200, 41%, 95%)</dd>
            </dl>
          </li>
        </ul>
        <h3>Neutral colors</h3>
        <ul className="flex-container" role="list">
          <li>
            <div
              className="bg-neutral-100"
              style={{ width: '150px', height: '100px' }}
            ></div>
            <h4>
              <code>neutral-color-100</code>
            </h4>
            <dl>
              <dt>HSL:</dt>
              <dd>hsl(0, 0%, 0%)</dd>
            </dl>
          </li>
          <li>
            <div
              className="bg-neutral-400"
              style={{ width: '150px', height: '100px' }}
            ></div>
            <h4>
              <code>neutral-color-400</code>
            </h4>
            <dl>
              <dt>HSL:</dt>
              <dd>hsl(0, 0%, 40%)</dd>
            </dl>
          </li>
          <li>
            <div
              className="bg-neutral-600"
              style={{ width: '150px', height: '100px' }}
            ></div>
            <h4>
              <code>neutral-color-600</code>
            </h4>
            <dl>
              <dt>HSL:</dt>
              <dd>hsl(0, 0%, 60%)</dd>
            </dl>
          </li>
          <li>
            <div
              className="bg-neutral-900"
              style={{ width: '150px', height: '100px' }}
            ></div>
            <h4>
              <code>neutral-color-000</code>
            </h4>
            <dl>
              <dt>HSL:</dt>
              <dd>hsl(0, 0%, 100%)</dd>
            </dl>
          </li>
        </ul>
        <h3>Gradients</h3>
        <div
          className="gradient-main"
          style={{ width: '150px', height: '100px' }}
        ></div>
        <h4>
          <code>gradient-main</code>
        </h4>
        <p>
          <code>
            linear-gradient(180deg, var(--main-color-400) 0%, hsla(0, 0%, 77%,
            0) 100%)
          </code>
        </p>
      </details>
      <details>
        <summary>
          <h2>Font sizes</h2>
        </summary>
        <p>
          All those typografy sizes were chosen with the method of{' '}
          <strong>fluid typography</strong>, which decides a font size depending
          of the screen's width, making the font size fully responsive. It was
          designed using{' '}
          <a
            className="color-main-400"
            href="https://utopia.fyi/type/calculator?c=320,21,1.2,1140,24,1.25,5,2,&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l"
          >
            this fluid typography calculator.
          </a>
        </p>
        <ul role="list">
          <li>
            <p className="fs-300">fs-300</p>
          </li>
          <li>
            <p className="fs-400">fs-400</p>
          </li>
          <li>
            <p className="fs-500">fs-500</p>
          </li>
          <li>
            <p className="fs-700">fs-700</p>
          </li>
          <li>
            <p className="fs-800">fs-800</p>
          </li>
        </ul>
      </details>
      <details id="spacing-design-tokens">
        <summary>
          <h2>Spaces</h2>
        </summary>
        <p>
          Spaces are used for magins and paddings, the values in px are used for
          Design system are those:
        </p>
        <table>
          <thead>
            <tr>
              <th scope="col">Token</th>
              <th scope="col">Value (in px)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>4</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>8</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>12</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>16</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>20</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>24</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>32</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>40</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>64</td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>100</td>
            </tr>
          </tbody>
        </table>
      </details>
      <details>
        <summary>
          <h2>Miscelaneous</h2>
        </summary>
        <h3>Border radius</h3>
        <p>
          According to design, there is only one border radius in this project
        </p>
        <div
          className="br-normal"
          style={{ width: '150px', height: '100px', border: '2px solid black' }}
        ></div>
        <h4>
          <code>br-normal</code>
        </h4>
        <p>32px</p>
        <h3>Box shadow</h3>
        <div
          style={{
            width: '150px',
            height: '100px',
            border: '2px solid black',
            boxShadow: 'var(--box-shadow)',
          }}
        ></div>
        <h4>
          <code>box-shadow</code>
        </h4>
        <p>32px</p>
      </details>
      <p>The utility classes generated with those design tokens are those:</p>
      <details>
        <summary>
          <h2>Colors</h2>
        </summary>
        <h3>Background colors</h3>
        <dl>
          <dt>bg-main-400</dt>
          <dd>
            <code>background-color: var(--main-color-400)</code>
          </dd>
        </dl>
        <dl>
          <dt>bg-main-500</dt>
          <dd>
            <code>background-color: var(--main-color-500)</code>
          </dd>
        </dl>
        <dl>
          <dt>bg-main-900</dt>
          <dd>
            <code>background-color: var(--main-color-900)</code>
          </dd>
        </dl>
        <dl>
          <dt>bg-neutral-100</dt>
          <dd>
            <code>background-color: var(--main-neutral-100)</code>
          </dd>
        </dl>
        <dl>
          <dt>bg-neutral-400</dt>
          <dd>
            <code>background-color: var(--main-neutral-400)</code>
          </dd>
        </dl>
        <dl>
          <dt>bg-neutral-600</dt>
          <dd>
            <code>background-color: var(--main-neutral-600)</code>
          </dd>
        </dl>
        <dl>
          <dt>bg-neutral-900</dt>
          <dd>
            <code>background-color: var(--main-neutral-900)</code>
          </dd>
        </dl>
        <h3>Text color</h3>
        <dl>
          <dt>color-main-400</dt>
          <dd>
            <code>color: var(--main-color-400)</code>
          </dd>
        </dl>
        <dl>
          <dt>color-main-500</dt>
          <dd>
            <code>color: var(--main-color-500)</code>
          </dd>
        </dl>
        <dl>
          <dt>color-main-900</dt>
          <dd>
            <code>color: var(--main-color-900)</code>
          </dd>
        </dl>
        <dl>
          <dt>color-neutral-100</dt>
          <dd>
            <code>color: var(--main-neutral-100)</code>
          </dd>
        </dl>
        <dl>
          <dt>color-neutral-400</dt>
          <dd>
            <code>color: var(--main-neutral-400)</code>
          </dd>
        </dl>
        <dl>
          <dt>color-neutral-600</dt>
          <dd>
            <code>color: var(--main-neutral-600)</code>
          </dd>
        </dl>
        <dl>
          <dt>color-neutral-900</dt>
          <dd>
            <code>color: var(--main-neutral-900)</code>
          </dd>
        </dl>
        <h3>Border colors</h3>
        <dl>
          <dt>border-main-400</dt>
          <dd>
            <code>border-color: var(--main-color-400)</code>
          </dd>
        </dl>
        <dl>
          <dt>border-main-500</dt>
          <dd>
            <code>border-color: var(--main-color-500)</code>
          </dd>
        </dl>
        <dl>
          <dt>border-main-900</dt>
          <dd>
            <code>border-color: var(--main-color-900)</code>
          </dd>
        </dl>
        <dl>
          <dt>border-neutral-100</dt>
          <dd>
            <code>border-color: var(--main-neutral-100)</code>
          </dd>
        </dl>
        <dl>
          <dt>border-neutral-400</dt>
          <dd>
            <code>border-color: var(--main-neutral-400)</code>
          </dd>
        </dl>
        <dl>
          <dt>border-neutral-600</dt>
          <dd>
            <code>border-color: var(--main-neutral-600)</code>
          </dd>
        </dl>
        <dl>
          <dt>border-neutral-900</dt>
          <dd>
            <code>border-color: var(--main-neutral-900)</code>
          </dd>
        </dl>
        <h3>Gradiente</h3>
        <dl>
          <dt>gradient-main</dt>
          <dd>
            <code>
              background: linear-gradient(180deg, var(--main-color-400) 0%,
              hsla(0, 0%, 77%, 0) 100%)
            </code>
          </dd>
        </dl>
      </details>
      <details>
        <summary>
          <h2>Font sizes</h2>
        </summary>
        <dl>
          <dt>fs-300</dt>
          <dd>
            <code>font-size: var(--fs-300)</code>
          </dd>
        </dl>
        <dl>
          <dt>fs-400</dt>
          <dd>
            <code>font-size: var(--fs-400)</code>
          </dd>
        </dl>
        <dl>
          <dt>fs-500</dt>
          <dd>
            <code>font-size: var(--fs-500)</code>
          </dd>
        </dl>
        <dl>
          <dt>fs-700</dt>
          <dd>
            <code>font-size: var(--fs-700)</code>
          </dd>
        </dl>
        <dl>
          <dt>fs-800</dt>
          <dd>
            <code>font-size: var(--fs-800)</code>
          </dd>
        </dl>
      </details>
      <details>
        <summary>
          <h2>Spaces</h2>
        </summary>
        <p>
          The prefixes for the classes that uses the spacing design tokens are:
        </p>
        <table>
          <caption>Spacing utility class' prefixes</caption>
          <thead>
            <tr>
              <th scope="col">Prefix</th>
              <th scope="col">CSS properties</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <code>p-</code>
              </th>
              <td>
                <p>padding</p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>pt-</code>
              </th>
              <td>
                <p>padding-top</p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>pb-</code>
              </th>
              <td>
                <p>padding-bottom</p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>pr-</code>
              </th>
              <td>
                <p>padding-right</p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>pl-</code>
              </th>
              <td>
                <p>padding-left</p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>px-</code>
              </th>
              <td>
                <p>padding-left</p>
                <p>padding-right</p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>py-</code>
              </th>
              <td>
                <p>padding-top</p>
                <p>padding-bottom</p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>m-</code>
              </th>
              <td>
                <p>margin</p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>mt-</code>
              </th>
              <td>
                <p>margin-top</p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>mb-</code>
              </th>
              <td>
                <p>margin-bottom</p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>mr-</code>
              </th>
              <td>
                <p>margin-right</p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>ml-</code>
              </th>
              <td>
                <p>margin-left</p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>mx-</code>
              </th>
              <td>
                <p>margin-left</p>
                <p>margin-right</p>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>my-</code>
              </th>
              <td>
                <p>margin-top</p>
                <p>margin-bottom</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          To create a class with those prefixes, you just add the prefix
          followed by the design token name: for example <code>px-4</code> will
          add a <code>padding-left</code> and <code>padding-right</code> of
          16px. Remember you can check the spacing design tokens in{' '}
          <a href="#spacing-design-tokens">spacing section</a>
        </p>
      </details>
      <style jsx>{`
        .container {
          margin-inline: auto;
          max-width: 1200px;
          padding-inline: 1em;
        }
        summary * {
          display: inline;
        }
        ul[role='list'] {
          list-style: none;
        }
        .flex-container {
          display: flex;
          flex-wrap: wrap;
          gap: 1em;
          justify-content: center;
        }
        .flex-container > * {
          flex: 1 1 min(100%, 300px);
        }
        dl {
          display: flex;
          flex-wrap: wrap;
          gap: 1em;
        }
        dt {
          font-weight: bold;
        }
        dd {
          margin-left: 0;
        }
        a {
          text-decoration: underline;
          text-decoration-color: var(--main-color-400);
          font-weight: bold;
        }
        table {
          width: 100%;
          max-width: 500px;
          margin-inline: auto;
          border-collapse: collapse;
          border: 2px solid black;
        }
        caption {
          text-align: center;
        }
        th,
        td {
          border: 1px solid black;
        }
      `}</style>
    </div>
  );
}
