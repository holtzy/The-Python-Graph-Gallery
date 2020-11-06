(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    "2mCb": function (e, a, t) {},
    S3j1: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, "default", function () {
          return E;
        });
      var n = t("q1tI"),
        l = t.n(n),
        i = t("4/Vk"),
        o = t("7oih"),
        r = t("7vrA"),
        c = t("6+GL"),
        m = t("3Z9Z"),
        s = (t("2mCb"), t("Wbzz")),
        d = t("9eSz"),
        h = t.n(d);
      function u(e) {
        var a = e.imgName,
          t = e.caption,
          n = Object(s.c)("3289484431").allFile.edges.find(function (e) {
            return e.node.name.includes(a);
          });
        return n
          ? l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(
                "div",
                { className: "chartImageContainer" },
                l.a.createElement(h.a, {
                  alt: a,
                  fluid: n.node.childImageSharp.fluid,
                  className: "chartImageImg",
                }),
                l.a.createElement(
                  "div",
                  { className: "chartImageOverlay" },
                  l.a.createElement(
                    "div",
                    { className: "chartImageOverlayText" },
                    l.a.createElement("p", null, t)
                  )
                )
              )
            )
          : null;
      }
      var b = t("JI6e");
      function p(e) {
        var a = e.imgName,
          t = e.caption,
          n = e.linkTo;
        return l.a.createElement(
          b.a,
          { xs: 12, md: 4 },
          l.a.createElement(
            s.a,
            { to: n },
            l.a.createElement(u, { imgName: a, caption: t })
          )
        );
      }
      var y = t("pJaR");
      function E() {
        return l.a.createElement(
          o.a,
          { title: "Density chart" },
          l.a.createElement(i.a, {
            title: "Density chart",
            description:
              "<p>Density plots allow to visualize the distribution of a numeric variable for one or several groups. They are very well adapted for large dataset, as stated in data-to-viz.com. Note that 2 approaches exist to build them in python, the first computing a kernel density estimate, the second building a high resolution histogram.</p>",
          }),
          l.a.createElement(
            r.a,
            null,
            l.a.createElement(
              "h2",
              null,
              "Density charts with ",
              l.a.createElement("code", null, "Searborn")
            ),
            l.a.createElement(
              "p",
              null,
              l.a.createElement("code", null, "Seaborn"),
              " is a python library allowing to make better charts easily. It is well adapted to build density charts thanks to its ",
              l.a.createElement("code", null, "kdeplot"),
              " function. The following charts will guide you through its usage, going from a very ",
              l.a.createElement(s.a, { to: "" }, "basic density plot"),
              " to something much more ",
              l.a.createElement(s.a, { to: "" }, "customized"),
              "."
            ),
            l.a.createElement(
              m.a,
              null,
              l.a.createElement(p, {
                imgName: "70_Basic_density_plot_Seaborn",
                caption:
                  "The most basic density plot one can make with python and seaborn",
                linkTo: "/70-basic-density-plot-with-seaborn",
              }),
              l.a.createElement(p, {
                imgName: "71_Shaded_density_plot_Seaborn",
                caption: "learn how to build a very basic density chart",
                linkTo: "",
              }),
              l.a.createElement(p, {
                imgName: "72_Horizontal_density_plot_Seaborn",
                caption: "learn how to build a very basic density chart",
                linkTo: "",
              }),
              l.a.createElement(p, {
                imgName: "73_Control_bandwidth_densityplot_Seaborn1",
                caption: "learn how to build a very basic density chart",
                linkTo: "",
              }),
              l.a.createElement(p, {
                imgName: "73_Control_bandwidth_densityplot_Seaborn2",
                caption: "learn how to build a very basic density chart",
                linkTo: "",
              }),
              l.a.createElement(p, {
                imgName: "74_density_plot_multi_variables",
                caption: "learn how to build a very basic density chart",
                linkTo: "",
              })
            ),
            l.a.createElement(
              "h2",
              null,
              "Density charts with ",
              l.a.createElement("code", null, "Matplotlib")
            ),
            l.a.createElement(
              "p",
              null,
              l.a.createElement("code", null, "Matplotlib"),
              " is the most commong way to make charts in python. It is a bit more verbose than ",
              l.a.createElement("code", null, "Seaborn"),
              " described above, but sometimes allow more customization. Here are a few density chart examples made with ",
              l.a.createElement("code", null, "Matplotlib"),
              ":"
            ),
            l.a.createElement(
              m.a,
              null,
              l.a.createElement(p, {
                imgName: "70_Basic_density_plot_Seaborn",
                caption: "learn how to build a very basic density chart",
                linkTo: "",
              }),
              l.a.createElement(p, {
                imgName: "70_Basic_density_plot_Seaborn",
                caption: "learn how to build a very basic density chart",
                linkTo: "",
              }),
              l.a.createElement(p, {
                imgName: "70_Basic_density_plot_Seaborn",
                caption: "learn how to build a very basic density chart",
                linkTo: "",
              })
            )
          ),
          l.a.createElement(
            "div",
            { style: { backgroundColor: "#f8f9fa", padding: "20px" } },
            l.a.createElement(
              r.a,
              null,
              l.a.createElement(y.a, { chartFamily: "distribution" })
            )
          ),
          l.a.createElement(r.a, null, l.a.createElement(c.a, null))
        );
      }
    },
  },
]);
//# sourceMappingURL=component---src-pages-density-plot-js-cca5bf194730d7b9608e.js.map
