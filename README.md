# Here is the discussion of my blog backend project

A robust backend for a blogging platform with user roles, secure authentication, and public APIs. This platform allows users to manage their blogs and will enable admins to control users and blogs.

## 🌐 Live URL
https://blog-backend-seven-puce.vercel.app/


## 📖 Features

### User Roles
- **Admin**:  
  - Can block users.
  - Can delete any blog.
  - Cannot update blogs.
- **User**:  
  - Can register and log in.
  - Can create, update, and delete their blogs.
  - Cannot perform admin actions.

### Secure Authentication
- JWT-based authentication for secure user sessions.
- Role-based access control to differentiate actions between Admin and User.

### Blog Management
- Users can create, update, and delete their own blogs.
- Admins can delete any blog.

### Public Blog API
- Open access to view published blogs.
- **Search**: Find blogs by title or content.
- **Sort**: Arrange blogs by title or creation date.
- **Filter**: View blogs by specific authors.

### Error Handling
- Zod Validation Error
- Not Found Error
- Validation Error
- Authentication Error
- Authorization Error
- Internal Server Error

---

## ⚙️ Technologies Used
- **TypeScript**: For type-safe development.
- **Node.js**: Runtime environment for scalable server-side scripting.
- **Express.js**: Framework for building robust APIs.
- **MongoDB**: NoSQL database for storing user and blog data.
- **Mongoose**: ODM for MongoDB schema modeling and validation.
