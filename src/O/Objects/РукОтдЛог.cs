﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.O
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Рук отд лог.
    /// </summary>
    // *** Start programmer edit section *** (РукОтдЛог CustomAttributes)

    // *** End programmer edit section *** (РукОтдЛог CustomAttributes)
    [AutoAltered()]
    [Caption("Рук отд лог")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("РукОтдЛогE", new string[0])]
    [View("РукОтдЛогL", new string[0])]
    public class РукОтдЛог : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.O.Персонал fПерсонал;
        
        // *** Start programmer edit section *** (РукОтдЛог CustomMembers)

        // *** End programmer edit section *** (РукОтдЛог CustomMembers)

        
        /// <summary>
        /// Рук отд лог.
        /// </summary>
        // *** Start programmer edit section *** (РукОтдЛог.Персонал CustomAttributes)

        // *** End programmer edit section *** (РукОтдЛог.Персонал CustomAttributes)
        [PropertyStorage(new string[] {
                "Персонал"})]
        [NotNull()]
        public virtual IIS.O.Персонал Персонал
        {
            get
            {
                // *** Start programmer edit section *** (РукОтдЛог.Персонал Get start)

                // *** End programmer edit section *** (РукОтдЛог.Персонал Get start)
                IIS.O.Персонал result = this.fПерсонал;
                // *** Start programmer edit section *** (РукОтдЛог.Персонал Get end)

                // *** End programmer edit section *** (РукОтдЛог.Персонал Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РукОтдЛог.Персонал Set start)

                // *** End programmer edit section *** (РукОтдЛог.Персонал Set start)
                this.fПерсонал = value;
                // *** Start programmer edit section *** (РукОтдЛог.Персонал Set end)

                // *** End programmer edit section *** (РукОтдЛог.Персонал Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "РукОтдЛогE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РукОтдЛогE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РукОтдЛогE", typeof(IIS.O.РукОтдЛог));
                }
            }
            
            /// <summary>
            /// "РукОтдЛогL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РукОтдЛогL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РукОтдЛогL", typeof(IIS.O.РукОтдЛог));
                }
            }
        }
    }
}
