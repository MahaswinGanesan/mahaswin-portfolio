import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, GraduationCap, Award, Users, Database, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Mahaswin G</h1>
          <p className="text-xl opacity-90">Software Developer Portfolio</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-12">
        {/* About Section */}
        <section className="animate-fade-in">
          <Card className="hover-scale border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-3xl text-primary">
                <Code2 className="w-8 h-8" />
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-foreground">
                Passionate Software Developer with expertise in full-stack development and a strong foundation in multiple programming languages. 
                Committed to creating efficient, scalable solutions and continuously learning new technologies. 
                Experienced in leading teams and contributing to innovative projects that make a real impact.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Education Section */}
        <section className="animate-fade-in">
          <Card className="hover-scale border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-3xl text-primary">
                <GraduationCap className="w-8 h-8" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-secondary">Madras Institute of Technology</h3>
                <p className="text-muted-foreground">Anna University, Chennai, Tamil Nadu, India</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Professional Skills Section */}
        <section className="animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 text-primary">Professional Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Programming Languages */}
            <Card className="hover-scale border-primary/20 shadow-lg transition-all hover:shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Code2 className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 justify-center">
                {["C", "C++", "Java", "Python", "Javascript"].map((lang) => (
                  <Badge key={lang} variant="secondary" className="text-sm px-3 py-1">
                    {lang}
                  </Badge>
                ))}
              </CardContent>
            </Card>

            {/* Web Development */}
            <Card className="hover-scale border-primary/20 shadow-lg transition-all hover:shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl text-secondary">Web Development</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 justify-center">
                {["HTML", "CSS", "React.js", "Node.js", "Express.js"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </CardContent>
            </Card>

            {/* Database Management */}
            <Card className="hover-scale border-primary/20 shadow-lg transition-all hover:shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Database className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">Database Management</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 justify-center">
                {["Oracle DB", "MySQL", "PostgreSQL", "MongoDB"].map((db) => (
                  <Badge key={db} variant="secondary" className="text-sm px-3 py-1">
                    {db}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Soft Skills Section */}
        <section className="animate-fade-in">
          <Card className="hover-scale border-secondary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-3xl text-secondary">
                <Users className="w-8 h-8" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              {["Leadership", "Easily Adaptable", "Teamwork"].map((skill) => (
                <Badge key={skill} variant="outline" className="text-base px-4 py-2 border-secondary text-secondary">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Certifications Section */}
        <section className="animate-fade-in">
          <Card className="hover-scale border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-3xl text-primary">
                <Award className="w-8 h-8" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "AWS Cloud Foundation", org: "Amazon AWS", year: "2024" },
                { name: "Core Employability Skills", org: "Wadhwani Foundation", year: "2023" },
                { name: "Prompt Engineering", org: "HCL", year: "2023" }
              ].map((cert, idx) => (
                <div key={idx} className="p-4 bg-accent/5 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors">
                  <h4 className="font-semibold text-lg text-foreground">{cert.name}</h4>
                  <p className="text-muted-foreground">{cert.org} • {cert.year}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Leadership Section */}
        <section className="animate-fade-in">
          <Card className="hover-scale border-secondary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-3xl text-secondary">
                <Users className="w-8 h-8" />
                Leadership
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-6 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-lg">
                <h4 className="font-bold text-xl text-foreground mb-2">Chairperson of Youth Red Cross</h4>
                <p className="text-muted-foreground">Madras Institute of Technology</p>
                <p className="text-sm text-muted-foreground mt-1">2025 - 2026</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8 mt-12">
        <div className="container mx-auto text-center">
          <p className="opacity-90">© 2025 Mahaswin G. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
