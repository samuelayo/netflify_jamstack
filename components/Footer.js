
const Footer = () => {
    const mystyle = {
        "position": "absolute",
        "bottom": "0",
        "width": "100%",
        "backgroundColor": "#333",
        "color":"#fff",
    };
    return (
        <footer style={mystyle} className="page-footer font-small bg-blue pt-4">
          <div className="container text-center text-md-left">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase font-weight-bold">Contact Us</h5>
                <p>You can contact us on 234-8094-34033-33</p>
              </div>
              <div className="col-md-6 mb-md-0 mb-3">
                <h5 className="text-uppercase font-weight-bold">Return Policy</h5>
                <p>We accept returns after 7 days max</p>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-3">© 2019 Copyright:
            <span> Shoppr</span>
          </div>
        </footer>
    );
  };
  export default Footer;