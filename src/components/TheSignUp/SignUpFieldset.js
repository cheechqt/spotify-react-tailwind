function SignUpFieldset() {
  return (
    <fieldset role="radiogroup" className="pb-6">
      <legend className="pb-2 font-bold text-sm">What's your gender?</legend>
      <div className="flex flex-wrap">
        
        <div className="py-1 flex justify-center items-center">
          <input
            name="gender"
            type="radio"
            id="gender_male"
            required
            value="male"
            className="accent-[#169b45] h-[16px] w-[16px]"
          />
          <label className="pl-3 pr-6 text-sm" htmlFor="gender_male">
            Male
          </label>
        </div>
        <div className="py-1 flex justify-center items-center">
          <input
            name="gender"
            type="radio"
            id="gender_female"
            required
            value="female"
            className="accent-[#169b45] h-[16px] w-[16px]"
          />
          <label className="pl-3 pr-6 text-sm" htmlFor="gender_female">
            Female
          </label>
        </div>
        <div className="py-1 flex justify-center items-center">
          <input
            name="gender"
            type="radio"
            id="gender_nonbinary"
            required
            value="nonbinary"
            className="accent-[#169b45] h-[16px] w-[16px]"
          />
          <label className="pl-3 pr-6 text-sm" htmlFor="gender_nonbinary">
            Non-binary
          </label>
        </div>
        <div className="py-1 flex justify-center items-center">
          <input
            name="gender"
            type="radio"
            id="gender_other"
            required
            value="other"
            className="accent-[#169b45] h-[16px] w-[16px]"
          />
          <label className="pl-3 pr-6 text-sm" htmlFor="gender_other">
            Other
          </label>
        </div>
        <div className="py-1 flex justify-center items-center">
          <input
            name="gender"
            type="radio"
            id="gender_prefernottosay"
            required
            value="prefernottosay"
            className="accent-[#169b45] h-4 w-4"
          />
          <label className="pl-3 pr-6 text-sm" htmlFor="gender_prefernottosay">
            Prefer not to say
          </label>
        </div>
      </div>
    </fieldset>
  );
}

export default SignUpFieldset;
