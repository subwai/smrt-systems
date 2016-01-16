import com.typesafe.sbt.packager.docker._
import com.typesafe.config._

val conf = ConfigFactory.parseFile(new File("conf/application.conf")).resolve()

name := conf.getString("app.name")
version := conf.getString("app.version")

lazy val root = (project in file(".")).enablePlugins(PlayJava, JavaAppPackaging, DockerPlugin)

scalaVersion := "2.11.6"

libraryDependencies ++= Seq(
  javaJdbc,
  cache,
  javaWs
)

// Play provides two styles of routers, one expects its actions to be injected, the
// other, legacy style, accesses its actions statically.
routesGenerator := InjectedRoutesGenerator


fork in run := true

dockerCommands := Seq(
  // Base images
  Cmd("FROM", "frolvlad/alpine-oraclejdk8"),
  // Add bash
  Cmd("RUN", "apk update && apk add bash"),
  Cmd("WORKDIR", "/opt/docker"),
  Cmd("ADD", "opt /opt"),
  Cmd("RUN", "chown -R daemon:daemon ."),
  Cmd("EXPOSE", "9000"),
  Cmd("USER", "daemon"),
  Cmd("ENTRYPOINT", "bin/smrt-systems"),
  Cmd("CMD", "")
)