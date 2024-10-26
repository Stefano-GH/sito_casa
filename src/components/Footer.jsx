/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/


/*----------------------------------------
  FOOTER STRUCTURE
  ----------------------------------------
*/
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return <footer style={{backgroundColor:'black', color:'white', padding:'20px 0', textAlign:'center'}}>
      <p>© {currentYear} Ginevra e Stefano. Tutti i diritti riservati.</p>
    </footer>
}

export default Footer;