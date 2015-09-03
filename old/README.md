# techies-lab

## You want to contribute?

Open your terminal and `cd` to the right directory.<br />
You will work in a branch and then submit a pull request!

```bash
# First get up to date
$ git checkout master        # Go back to master branch
$ git pull origin master     # Fetch latest version
$ git sweep                  # Get rid of merged branches (Download)[http://lab.arc90.com/2012/04/03/git-sweep/]

# Launch index.htlm file to see the current state of the website

# Open another terminal, and create a branch to work in
$ git checkout -b your-new-feature  # Please choose a descriptive name
$ stt  # Open sublime text and work.
$ open assets/images   # If you need to add images

# Done? Great!
$ git status
$ git add .  # Git add the stuff you changed
$ git commit -m "a descriptive message about your change"
$ git push origin your-new-feature  # push YOUR branch
# Then go to GitHub and open a pull-request
```