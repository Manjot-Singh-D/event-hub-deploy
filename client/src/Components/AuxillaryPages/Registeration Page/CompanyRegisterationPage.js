import React, { useEffect, useState } from "react";
import "./registerationPage.css";
import Navbar from "../../Home/Navbar/Navbar";
import { Link, useHistory } from "react-router-dom";
import {
  setLoginStatus,
  setCompanyDetails,
  setUserRegister,
} from "../../../data/Data";
import regImage from "../../../pictures/regImage.png";
import axios from "axios";

function CompanyRegisterationPage() {
  const [isRegistered, setisRegistered] = useState(false);
  const [Id, setId] = useState("");
  const [passwordMatching, setPasswordMatching] = useState(true);
  const [details, setDetails] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    mobile: "",
    landline: "",
    state: "",
    city: "",
    pincode: "",
    confirmPassword: "",
    minPrice: 0,
    maxPrice: 0,
    bio: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  }

  const history = useHistory();
  useEffect(() => {
    document.title = "Company Registeration";
  }, []);

  const handleRegFormSubmit = (event) => {
    if (details.password !== details.confirmPassword) {
      setPasswordMatching(false);
    } else {
      axios
        .post(
          `${process.env.REACT_APP_BACKEND_URL}/organisers/register`,
          details
        )
        .then(function (res) {
          setisRegistered(res.data.valid);
          setCompanyDetails({ id: res.data.id });
          setId(res.data.id);
        });
      event.preventDefault();
    }
  };

  if (passwordMatching === false) {
    alert("Passwords don't match");
    window.location.reload(false);
  }

  if (isRegistered === true) {
    setLoginStatus(true);
    setUserRegister(false);
    history.push(`/company/${Id}`);
    return null;
  } else {
    if (isRegistered !== false) {
      alert("Company already exists with this email");
      window.location.reload(false);
    }
    return (
      <div className="regPage">
        <Navbar />
        <div className="regPage-bgImage">
          <div className="regPage-left">
            <img src={regImage} alt="regImage" />
          </div>
          <div className="regPage-regForm">
            <p className="regPage-heading">Company Registeration</p>
            <form
              className="regPage-form "
              action="#"
              onSubmit={handleRegFormSubmit}
            >
              <div className="form-row">
                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                  <label for="companyName">Company Name</label>
                  <input
                    onChange={handleChange}
                    value={details.name}
                    name="name"
                    type="text"
                    className="form-control"
                    id="companyName"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6 col-sm-6 col-xs-6">
                  <label for="inputEmail4">Email</label>
                  <input
                    onChange={handleChange}
                    value={details.email}
                    name="email"
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    required
                  />
                </div>
                <div class="form-group col-md-6 col-sm-6 col-xs-6">
                  <label for="inputAddress">Address</label>
                  <input
                    onChange={handleChange}
                    value={details.address}
                    name="address"
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6 col-sm-6 col-xs-6">
                  <label for="inputPassword4">Password</label>
                  <input
                    onChange={handleChange}
                    value={details.password}
                    name="password"
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    required
                  />
                </div>
                <div className="form-group col-md-6 col-sm-6 col-xs-6">
                  <label for="inputConfirmPassword4">Confirm Password</label>
                  <input
                    onChange={handleChange}
                    name="confirmPassword"
                    value={details.confirmPassword}
                    type="password"
                    className="form-control"
                    id="inputConfirmPassword4"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6 col-sm-6 col-xs-6">
                  <label for="inputMobile">Mobile no.</label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">+91</span>
                    </div>
                    <input
                      onChange={handleChange}
                      value={details.mobile}
                      name="mobile"
                      type="tel"
                      id="inputMobile"
                      className="form-control"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
                <div className="form-group col-md-6 col-sm-6 col-xs-6">
                  <label for="inputLandline">Landline no.</label>
                  <div className="input-group mb-3">
                    <input
                      onChange={handleChange}
                      value={details.landline}
                      id="inputLandline"
                      name="landline"
                      type="tel"
                      className="form-control"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4 col-sm-4 col-xs-4">
                  <label for="inputState">State</label>
                  <select
                    onChange={handleChange}
                    value={details.state}
                    name="state"
                    id="inputState"
                    className="form-control"
                    required
                  >
                    <option selected></option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">
                      Dadar and Nagar Haveli
                    </option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                  </select>
                </div>
                <div className="form-group col-md-4 col-sm-4 col-xs-4">
                  <label for="inputCity">City</label>
                  <input
                    onChange={handleChange}
                    value={details.city}
                    name="city"
                    type="text"
                    className="form-control"
                    id="inputCity"
                    required
                  />
                </div>
                <div className="form-group col-md-4 col-sm-4 col-xs-4">
                  <label for="inputZip">Pincode</label>
                  <input
                    onChange={handleChange}
                    value={details.pincode}
                    name="pincode"
                    type="text"
                    className="form-control"
                    id="inputZip"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6 col-sm-6 col-xs-6">
                  <label for="inputEmail4">Min Price</label>
                  <input
                    onChange={handleChange}
                    value={details.minPrice}
                    name="minPrice"
                    type="text"
                    className="form-control"
                    id="inputMinPrice"
                    required
                  />
                </div>
                <div class="form-group col-md-6 col-sm-6 col-xs-6">
                  <label for="inputAddress">Max Price</label>
                  <input
                    onChange={handleChange}
                    value={details.maxPrice}
                    name="maxPrice"
                    type="text"
                    class="form-control"
                    id="inputMaxPrice"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                  <label for="companyName">Bio</label>
                  <textarea
                    onChange={handleChange}
                    value={details.bio}
                    name="bio"
                    type="text"
                    className="form-control"
                    id="bio"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" for="gridCheck">
                    remember me
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <Link className="ml-2" to="/login">
                Already a member?
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyRegisterationPage;
