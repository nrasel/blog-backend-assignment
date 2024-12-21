## Blog Platform Backend

# Project Name

Blog Platform Backend 📝

Live URL

🚀 https://blog-backend-seven-puce.vercel.app/

Overview 📝

    - The Blog Backend project is for a blogging platform. It supports user registration, authentication, blog creation, and role-based access control. Designed with scalability and security in mind, it allows to management of blogs and users.

Features

1. User Roles

   Admin: 👩‍💼

   - Can delete any blog.

   - Can block any user.

   - Cannot update any blog.

   User: 👤

   - Can register and log in.

   - Can create, update, and delete their own blogs.

   - Cannot perform admin-level actions.

2. Authentication and Authorization 🔒

   - Authentication:

   * Users must log in to create, update, or delete blogs.

   -Authorization:

   - Admin and User roles are secured and differentiated.

3. Blog API 📚

   - Public API for viewing blogs with the following functionalities:

     - Search: 🔍 Search blogs by title or content.

     - Sort: ⬆️⬇️ Sort blogs by fields such as creation date or title.

     - Filter: 🎯 Filter blogs by author ID.

4. Error Handling ❗

   - Error handling for validation errors, authentication issues, and server errors.

5. Technologies Used

   - TypeScript ⚡

   - Node.js 🌐

   - Express.js 🖥️

   - MongoDB with Mongoose 📂
