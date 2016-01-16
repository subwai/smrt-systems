package controllers;

import play.*;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

    public Result index() {
        String name = Play.application().configuration().getString("app.name");
        String version = Play.application().configuration().getString("app.version");

        return ok(index.render("SF Green Clean POS", name, version));
    }

}
