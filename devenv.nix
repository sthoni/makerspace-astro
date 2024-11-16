{ pkgs, lib, ... }:

{
  languages.javascript = {
    enable = true;
    bun = {
      enable = true;
      install.enable = true;
    };
    npm = {
      enable = true;
      install.enable = true;
    };
  };
}
