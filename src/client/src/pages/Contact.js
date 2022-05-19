import React  from 'react';

const Contact = () => {
  return (
    <div className="container">
        <div> 
          <h1>Contact Me</h1>
        </div>
        <hr></hr>
        <div> 
          <h2 className='contactH2'> Contact - company info </h2>
          <h4>
            <ul className='lista'> 
              <li> Game Library </li>
              <li> Poznań - Online </li>
              <li> gamelibrary@gmail.com </li>
              <li> 61 - 091 - 30 - 23</li>
            </ul>
          </h4>
        </div>
        <hr></hr>
        <div>
          <h2 className='contactH2'> Authors </h2>           
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>E-mail</th>
                <th>Tel.</th>
              </tr>
              <tr>
                <td> Jan Święch </td>
                <td> j.swiech@edu.cdv.pl </td>
                <td> 123 - 456 - 789 </td>
              </tr>
              <tr>
                <td> Vitaliy Sklyar </td>
                <td> v.sklyar@edu.cdv.pl </td>
                <td> 123 - 456 - 789 </td>
              </tr>
              <tr>
                <td> Tomasz Napierała </td>
                <td> t.napierala@edu.cdv.pl </td>
                <td> 123 - 456 - 789 </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
)
};

export default Contact;