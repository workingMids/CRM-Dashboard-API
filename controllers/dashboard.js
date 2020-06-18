/**
 * 
 *  http://localhost:8000/DashboardDetails
 * 
 */

export const getDashboardDetails = async(req,res)=>{

    let dasboardJson = [
        {
          "title": "Attendence",
          "persentage": 50
        },
        {
          "title": "Sales Analytics",
          "persentage": 75
        },
        {
          "title": "Staff",
          "persentage": 100
        },
        {
          "title": "SMS",
          "persentage": 10
        }
      ];

    res.send(dasboardJson)

}