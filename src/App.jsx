export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-8 md:p-16 font-sans">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Header */}
        <section className="space-y-4">
          <h1 className="text-5xl font-bold">Ravinder Kumar</h1>
          <p className="text-xl text-blue-500 font-medium">
            Aspiring Full Stack & AI/ML Developer
          </p>
          <p className="text-gray-600 max-w-3xl leading-relaxed text-lg">
            Computer Science student passionate about full-stack development,
            backend APIs, and AI/ML systems. Experienced with Django,
            Django REST Framework, MySQL, and scalable backend architecture.
          </p>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="border rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Frontend</h3>
              <ul className="space-y-2 text-gray-700">
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
              </ul>
            </div>

            <div className="border rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Backend</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Python</li>
                <li>Django</li>
                <li>Django REST Framework</li>
                <li>JWT Authentication</li>
              </ul>
            </div>

            <div className="border rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Database</h3>
              <ul className="space-y-2 text-gray-700">
                <li>MySQL</li>
                <li>SQLite</li>
                <li>PostgreSQL</li>
              </ul>
            </div>

            <div className="border rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-lg mb-3">Tools</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Git & GitHub</li>
                <li>Postman</li>
                <li>VS Code</li>
                <li>XAMPP</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>

          <div className="space-y-8">

            <div className="border rounded-3xl p-7 shadow-sm">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <h3 className="text-2xl font-bold">
                  Student Management System
                </h3>
                <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
                  Django Project
                </span>
              </div>

              <p className="mt-4 text-gray-700 leading-relaxed">
                A full-stack Django-based student management system with CRUD
                operations, document uploads, CSV export, filters, pagination,
                and student result management.
              </p>

              <div className="mt-5 grid md:grid-cols-2 gap-5">
                <div>
                  <h4 className="font-semibold mb-2">Features</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Student CRUD Operations</li>
                    <li>Admin Dashboard</li>
                    <li>Document Upload System</li>
                    <li>CSV Export</li>
                    <li>Advanced Filtering</li>
                    <li>Pagination Support</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Django', 'MySQL', 'Bootstrap', 'HTML', 'CSS'].map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-blue-600 font-medium">
                  <a
                    href="https://github.com/Rkyadav04/studentMB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-xl border font-medium"
                 >
                   GitHub
                 </a>
                </p>
              </div>
            </div>

            <div className="border rounded-3xl p-7 shadow-sm">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <h3 className="text-2xl font-bold">
                  PulsePlanr Backend API
                </h3>
                <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
                  DRF Backend System
                </span>
              </div>

              <p className="mt-4 text-gray-700 leading-relaxed">
                A professional backend API system built using Django REST
                Framework with JWT authentication, serializers, permissions,
                token refresh, and scalable API architecture.
              </p>

              <div className="mt-5 grid md:grid-cols-2 gap-5">
                <div>
                  <h4 className="font-semibold mb-2">Features</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>JWT Authentication</li>
                    <li>REST APIs</li>
                    <li>Token Refresh</li>
                    <li>Serializers & Permissions</li>
                    <li>API Versioning</li>
                    <li>Postman Testing</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Django', 'DRF', 'JWT', 'SQLite'].map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-green-600 font-medium">
                 <a
                   href="https://github.com/Rkyadav04/PulsePlanr"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="px-5 py-2 rounded-xl border font-medium"
                 >
                   GitHub
               </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Internship */}
        <section className="border rounded-3xl p-7 shadow-sm">
          <h2 className="text-3xl font-bold mb-4">
            Internship & Learning
          </h2>

          <h3 className="text-xl font-semibold mb-2">
            IBM SkillBuild — Data Science Internship
          </h3>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Worked with R Programming</li>
            <li>Learned Data Science Fundamentals</li>
            <li>Explored Machine Learning Basics</li>
            <li>Built understanding of Data Analysis Concepts</li>
          </ul>
        </section>

        {/* Interests */}
        <section>
          <h2 className="text-3xl font-bold mb-5">Interests</h2>

          <div className="flex flex-wrap gap-3">
            {[
              'Full Stack Development',
              'Backend Engineering',
              'AI & Machine Learning',
              'AI in Healthcare',
              'Scalable API Systems'
            ].map((interest) => (
              <span
                key={interest}
                className="bg-black text-white px-4 py-2 rounded-full text-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </section>

        {/* Footer */}
        <section className="border-t pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="font-bold text-xl">Connect</h3>
            <p className="text-gray-600 mt-1">
              Open to internship opportunities, backend development roles, and collaborative projects.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <a
               href="https://github.com/Rkyadav04"
               target="_blank"
               rel="noopener noreferrer"
               className="px-5 py-2 rounded-xl border font-medium"
             >
               GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ravinder-kumar-00a574285/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-xl border font-medium"
             >
             LinkedIn
            </a>
            <a
              href="https://drive.google.com/file/d/1XMoyLr_cbqPv_LbZ8iuJViFDEoBmZqqe/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-xl border font-medium"
              >
              Resume
            </a>
              
            
            
          </div>
        </section>
      </div>
    </div>
  )
}
