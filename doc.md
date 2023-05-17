url - https://super-cleans-api-service.onrender.com

1. Order
url - http://localhost:5000/api/order
body - {name,product_name,order_in_kg,delivery_date,advance_Payment,Pending_payment,payment_status,created_by,created_at}

2. Customer
url - http://localhost:5000/api/customer
body - {name,address,email,mobile_no,created_by,created_at,working_area,state,district,taluka}

3. Daily-Manufacture - 
url - http://localhost:5000/api/daily_manufacture
body - {status,packing_type,filling,total_product_kg,batch,date,bag,created_by,created_at,productname}


4. catagory - 
url -http://localhost:5000/api/category
body - {name,createdby,createdat}

5. subcatagory - 
url -http://localhost:5000/api/categorys
body - {name,categories,createdby,createdat}


6. User - 
url- http://localhost:5000/api/user
body - {name,address,email,password,createdby,createdat,aadharno,aadharphoto,profileimg,role}

7. product - 
url - http://localhost:5000/api/product
body -  {productname,perKgAmount,createdby,createdat}

8. Department - 
url - http://localhost:5000/api/dep
body - {dept_name}

9. Weight - 
url - http://localhost:5000/api/weight
body - {weight_name}

10. Role - 
url - http://localhost:5000/api/role
body - {role_name}

11. Income -
url - http://localhost:5000/api/income
body - {name,date,income_type,description,amount}

12. Expence -
url - http://localhost:5000/api/expence
body - {name,date,expence_type,description,amount}

13. Leger - http://localhost:5000/api/leger
url - {total_income,total_amount,total_expence}

14. Attendence - http://localhost:5000/api/attendence
body - {name,presenty,desc,date}
