(ns artihata.routes.home
  (:require [compojure.core :refer :all]
            [artihata.layout :as layout]
            [artihata.util :as util]))

(defn about-page []
  (layout/render "about.html" {:content (util/md->html "/md/docs.md")}))

(defn editor-page []
  (layout/render "editor.html"))

(defn generator-page []
  (layout/render "generator.html"))

(defroutes home-routes
  (GET "/" [] (about-page))
  (GET "/editor" [] (editor-page))
  (GET "/generator" [] (generator-page)))
