import User from '../models/User.js';
import createError from "../utility/createError.js";



/**
 * @access public 
 * @route /api/user/register
 * @method POST 
 */
export const register = async (req, res, next) => {
    
  res.send('user Register is okk') 
    
}



/**
 * @access public 
 * @route /api/user/login
 * @method POST 
 */
 export const login = async (req, res, next) => {
    
    res.send('user Login is okk') 
      
  }



  /**
 * @access public 
 * @route /api/user/me
 * @method GET 
 */
export const loggedInUser = async (req, res, next) => {
    
    res.send('Loggedinuser is okk') 
      
  }
